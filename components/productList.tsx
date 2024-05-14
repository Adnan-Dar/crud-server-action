"use client";

import { Product } from "@/types/product";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/custom-button";
import { EditButton } from "@/components/edit-button";
import { AddProduct } from "@/components/add-button";
import { DeleteButton } from "@/components/del-button";
import { deleteProduct } from "@/actions/products";

interface TableProps {
  data: Product[];
}

const UserTable = () => {
  const [data, setData] = useState<Product[]>([]);
  const [sideDrawer, setSideDrawer] = useState(false);

  const openSideDrawer = (product: Product) => {
    setSideDrawer(true);
  };

  return (
    <div className="space-y-4 flex flex-col border-2 items-center">
      <div className="flex justify-between w-3/5  items-center mt-10">
         <div>
          <CustomButton label="Fetch Products" setData={setData} />
        </div>
        <div className="">
          <AddProduct label="Add Product" />
        </div>
       
      </div>
      <div className="border-2 w-3/5">
        <table className="w-full table-auto">
          {/* <caption className="text-center">A list of Products</caption> */}
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
                      {" "}
                      <EditButton
                        label="Edit"
                        openSideDrawer={openSideDrawer}
                        product={product}
                      />
                    </div>
                    <div>
                      {" "}
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

export default UserTable;
