import { AxiosInstance } from "@/lib/axios/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  CategoryResponse,
  CreateCategoryPayload,
  IUpdateCategory,
} from "../../types/category.types";

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: async (payload: CreateCategoryPayload) => {
      const response = await AxiosInstance.post(
        "/admin/category/create-category",
        payload,
        { withCredentials: true }
      );
      return response.data;
    },
  });
};

export const useGetCategory = (page: number, limit: 10) => {
  return useQuery({
    queryKey: ["category", page, limit],
    queryFn: async () => {
      const response = await AxiosInstance.get<CategoryResponse>(
        `/admin/category/get-category?page=${page}&limit=${limit}`,
        { withCredentials: true }
      );
      console.log(response);
      return response.data;
    },
    placeholderData: (prev) => prev,
  });
};

export const useToggleCategoryStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (categoryId: string) => {
      const response = await AxiosInstance.patch(
        `/admin/category/toggle-status/${categoryId}`,
        {},
        { withCredentials: true }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category"'] });
    },
  });
};

export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: async ({
      categoryId,
      data,
    }: {
      categoryId: string;
      data: IUpdateCategory;
    }) => {
      const response = await AxiosInstance.put(
        `/admin/editCategory/${categoryId}`,
        data,
        { withCredentials: true }
      );

      return response.data;
    },
  });
};