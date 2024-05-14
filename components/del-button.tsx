import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  label: string;
  deleteProduct: (id: number) => void;
  productId: number;
}

export const DeleteButton = ({
  label,
  deleteProduct,
  productId,
}: DeleteButtonProps) => {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    try {
      const response = await deleteProduct(productId);
      console.log("Product deleted successfully", response);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleConfirm = () => {
    handleDelete();
  };

  return (
    <div className="">
      <Button variant="destructive" className="w-16" onClick={handleConfirm}> {label}</Button>
    </div>
  );
};
