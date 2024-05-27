"use client";

import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { list } from "@/actions/products";
import { EditButton } from "@/components/edit-button";
import { AddProduct } from "@/components/add-button";
import { DeleteButton } from "@/components/del-button";
import { deleteProduct } from "@/actions/products";

interface UserTableProps {
  query: string;
  currentPage: number;
}

export const UserTable: React.FC<UserTableProps> = ({ query, currentPage }) => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sideDrawer, setSideDrawer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await list(query);
        setData(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product list:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const openSideDrawer = (product: Product) => {
    setSideDrawer(true);
  };

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="space-y-4 flex flex-col border-2 items-center">
      <div className="flex justify-between w-3/5 items-center mt-10">
        <div className="">
          <AddProduct label="Add Product" />
        </div>
      </div>
      <div className="border-2 w-3/5">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Id</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.price}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">
                  <div className="flex">
                    <div className="mr-2 items-center">
                      <EditButton
                        label="Edit"
                        openSideDrawer={openSideDrawer}
                        product={product}
                      />
                    </div>
                    <div>
                      <DeleteButton
                        label="Delete"
                        deleteProduct={deleteProduct}
                        productId={product.id}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
