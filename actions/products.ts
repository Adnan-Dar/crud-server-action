"use server";

import { Product } from "@/types/product";


export const list = async (pageNumber:Number, pageSize: Number) => {
    try {
        const response = await fetch(`http://localhost:3000/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const productsData = await response.json() as Product[];
        return productsData;
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; 
    }
};


export const update = async (id, newData) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData), // Use newData instead of product
        });
        if (!response.ok) {
            throw new Error('Failed to update product');
        }
        const updatedProduct = await response.json() as Product;
        return updatedProduct;
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
};

export const create = async (newProductData) => {
    try {
        const response = await fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProductData),
        });
        if (!response.ok) {
            throw new Error('Failed to create product');
        }
        const createdProduct = await response.json();
        return createdProduct;
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
};


export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete product');
        }
        return true; // Indicate successful deletion
    } catch (error) {
        console.error('Error deleting product:', error);
        return false; // Indicate failure
    }
};





