import type { IProduct } from "@/features/management/types/product.types";
import { AxiosInstance } from "@/lib/axios/axios";
import type { PaginatedResponse } from "@/types/paginatedResponse.types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["Products", page, limit],
    queryFn: async () => {
      const response = await AxiosInstance.get<PaginatedResponse<IProduct>>(
        `/user/allproduct?page=${page}&limit=${limit}`
      );
      return response.data;
    },
    placeholderData: (prev) => prev,
  });
};
