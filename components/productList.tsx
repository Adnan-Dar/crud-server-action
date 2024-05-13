"use client";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
import { Product } from "@/types/product"; // Import Product type
import { useState } from "react";
import Button from "@/components/custom-button"
import { EditButton } from "@/components/edit-button";


interface TableProps {
  data : Product[];
}

const  UserTable =  () => {
    const [data, setData] = useState<Product[]>([]);
    const [sideDrawer, setSideDrawer] = useState(false);

    const openSideDrawer = (product: Product) => {
      setSideDrawer(true);
    };


  return (
    <div className="space-y-4 flex flex-col  items-center ">
      <div>
        <Button label="Fetch Products" setData={setData} />
      </div>
      <div className=" w-2/3">
      <Table className=" border-gray-100  flex flex-col items-center">
        <TableCaption>A list of Products</TableCaption>
        <TableHeader>
          <TableRow className="flex w-96" >
            <TableHead >Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-left">Category</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                <EditButton
                      label="Edit"
                      openSideDrawer={openSideDrawer}
                      product={product}
                    />
                    <button className="bg-red-500 p-2 text-white rounded ms-2">
                      Delete
                    </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
    
      </div>
  );
};
export default UserTable;
