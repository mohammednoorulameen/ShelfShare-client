import { AxiosInstance } from "@/lib/axios/axios";
import { useQuery } from "@tanstack/react-query";
import type { CategoryResponse } from "../../types/category.types";

export const useGetVendorCategory = (page: number, limit: 10) => {
  return useQuery({
    queryKey: ["category", page, limit],
    queryFn: async () => {
      const response = await AxiosInstance.get<CategoryResponse>(
        `/vendor/category/get-category?page=${page}&limit=${limit}`,
        { withCredentials: true }
      );
      console.log(response);
      return response.data;
    },
    placeholderData: (prev) => prev,
  });
};