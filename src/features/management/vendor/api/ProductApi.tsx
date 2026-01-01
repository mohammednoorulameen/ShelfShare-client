import { AxiosInstance } from "@/lib/axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  ApiResponse,
  IProductPayload,
  IUpdateProduct,
  ProductResponseDto,
} from "../../types/product.types";

/* ================= VENDOR ADD PRODUCT ================= */

export const useAddProductMutation = () => {
  return useMutation({
    mutationFn: async (payload: IProductPayload) => {
      const response = await AxiosInstance.post(
        "/vendor/vendor-addproduct",
        payload
      );
      return response.data;
    },
  });
};

/* ================= GET VENDOR PRODUCT  ================= */

export const useGetVendorProducts = () => {
  return useQuery({
    queryKey: ["vendor-products"],
    queryFn: async () => {
      const response = await AxiosInstance.get<
        ApiResponse<ProductResponseDto[]>
      >("/vendor/get-vendorproduct", { withCredentials: true });
      return response.data.data;
    },
    placeholderData: (prev) => prev,
  });
};


/* ================= VENDOR GET WHICH PRODUCT UPDATE WITH ID ================= */

export const useGetUpdatePdoductWithId = (productId: string) => {
  return useQuery({
    queryKey: ["vendor-update-product", productId],
    queryFn: async () => {
      const response = await AxiosInstance.get<ApiResponse<ProductResponseDto>>(
        `vendor/getupdateprduct/${productId}`,
        { withCredentials: true }
      );
      return response.data;
    },
    enabled: !!productId,
  });
};

/* ================= VENDOR UPDATE PRODUCT ================= */

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: async ({ productId, data }: IUpdateProduct) => {
      const response = await AxiosInstance.put(
        `/vendor/update-product/${productId}`,
        data,
        { withCredentials: true }
      );
      return response.data;
    },
  });
};