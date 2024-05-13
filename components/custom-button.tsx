"use client";

import { list } from "@/actions/products";
import { Product } from "@/types/product";


interface ButtonProps {
  label: string;
  setData: (data: Product[]) => void;
}

const Button = ({ label, setData }: ButtonProps) => {
  const handleClick = async () => {
    const data = await list();
    console.log(data);
    setData(data);
  };

  return (
    <button className="bg-blue-500 p-4 me-4 rounded" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
