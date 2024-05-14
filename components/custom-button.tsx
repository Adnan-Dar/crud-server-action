"use client";

import { list } from "@/actions/products";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";


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

  return (
    <Button variant="secondary" className=" bg-blue-300 " onClick={handleClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
