"use client";

import { FC, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { limit } from "@/utils/stories/const";

type Props = {
  currentPage: number;
  total: number;
};

export const Paging: FC<Props> = ({ currentPage, total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPage = useMemo(() => {
    return Math.ceil(total / limit);
  }, [total]);

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded disabled:opacity-50"
      >
        前へ
      </button>
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 text-sm rounded ${
            page === currentPage
              ? "bg-blue-800 text-white"
              : "bg-blue-50 text-blue-800 hover:bg-blue-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPage}
        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded disabled:opacity-50"
      >
        次へ
      </button>
    </div>
  );
};
