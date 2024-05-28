"use client"
import { Suspense } from "react";
import Search from "@/components/ui/custum-ui/search";
import { UserTable } from "@/components/productList";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddProduct } from "@/components/add-button";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    per_page?: string;
  };
}) {
  const router = useRouter();
  const params = useSearchParams();
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.per_page) || 5;

  const handlePerPageChange = (value: string) => {
    const newPerPage = Number(value);
    const updatedParams = new URLSearchParams(params.toString());
    updatedParams.set('per_page', newPerPage.toString());
    updatedParams.set('page', '1'); // Reset to the first page when changing per_page
    router.push(`${window.location.pathname}?${updatedParams.toString()}`);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <div>
            <Search />
          </div>
          <div>
            <Select onValueChange={handlePerPageChange}>
              <SelectTrigger className="w-[150px] h-10">
                <SelectValue placeholder="Users per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <AddProduct label="Add User" />
        </div>
      </div>
      <Suspense key={query + currentPage + perPage} fallback={<div>Loading...</div>}>
        <UserTable query={query} currentPage={currentPage} perPage={perPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
