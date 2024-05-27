
import { Suspense } from "react";
import Search from "@/components/ui/custum-ui/search";
import { UserTable } from "@/components/productList";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between"></div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
      </div>
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <UserTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
