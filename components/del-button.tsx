import React, { useState } from "react";

interface DeleteButtonProps {
    label: string;
    deleteProduct: (id: number) => void;
    productId: number; // Add productId prop
}

export const DeleteButton = ({ label, deleteProduct, productId }: DeleteButtonProps) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteProduct(productId); // Pass productId to deleteProduct function
            console.log("Product deleted successfully");
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleConfirm = () => {
        handleDelete();
        setShowConfirmation(false);
    };

    return (
        <>
            {showConfirmation ? (
                <div>
                    <p>Are you sure you want to delete this product?</p>
                    <button onClick={handleConfirm}>Yes</button>
                    <button onClick={() => setShowConfirmation(false)}>No</button>
                </div>
            ) : (
                <button className="bg-red-500 p-2 text-white rounded ms-2" onClick={() => setShowConfirmation(true)}>
                    {label}
                </button>
            )}
        </>
    );
};