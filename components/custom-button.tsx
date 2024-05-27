"use client";

import { list } from "@/actions/products";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";


interface ButtonProps {
  label: string;
  setData: (data: Product[]) => void;
}

const CustomButton = ({ label, setData }: ButtonProps) => {

  const handleClick = async () => {
    const data = await list();
    console.log(data);
    setData(data);
  };
  
  const handlePreviousPage = async () => {
  
    console.log("Previous Page");
    
  }

  const handleNextPage = async () => {
   
    console.log("Next Page");
   
  }



  return (
    <>
    <Button variant="secondary" className=" bg-blue-300 " onClick={handleClick}>
      {label}
    </Button>
    {/* <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" onClick={handlePreviousPage} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" onClick={handleNextPage} />
    </PaginationItem>
  </PaginationContent>
</Pagination> */}

    </>
  );
};

export default CustomButton;
