import { useState, useMemo } from "react";

interface UsePaginationProps<T> {
  data: T[];
  pageSize?: number;
}

export function usePagination<T>({
  data,
  pageSize = 10,
}: UsePaginationProps<T>) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  return {
    page,
    setPage,
    totalPages,
    paginatedData,
    totalItems: data.length,
  };
}
