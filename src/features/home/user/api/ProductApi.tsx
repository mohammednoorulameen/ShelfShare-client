import type { IProduct } from "@/features/management/types/product.types";
import { AxiosInstance } from "@/lib/axios/axios";
import type { ProductResponseDto } from "@/types/Iproduct.types";
import type { PaginatedResponse } from "@/types/IpaginatedResponse.types";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/IApiResponse";





/* ================= USER GET ALL PRODUCTS ================= */

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


/* ================= USER GET ID PRODUCT (PRDUCT DETAILES) ================= */



export const useProductDetailes = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await AxiosInstance.get<ApiResponse<ProductResponseDto>>(
        `user/product-detailes/${productId}`,
        { withCredentials: true }
      );
      return response.data;
    },
    enabled: !!productId,
  });
};

