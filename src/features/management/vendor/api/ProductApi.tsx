import { AxiosInstance } from "@/lib/axios/axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import type { ApiResponse, IProductPayload, IUpdateProduct, ProductResponseDto } from "../../types/product.types"



export const useAddProductMutation = ()=>{
    return useMutation({
        mutationFn:async(payload : IProductPayload)=>{
            const response = await AxiosInstance.post('/vendor/vendor-addproduct',payload)
            return response.data
        }
    })
}




export const useGetVendorProducts = () => {
  return useQuery({
    queryKey: ["vendor-products"],
    queryFn: async () => {
      const response = await AxiosInstance.get<ApiResponse<ProductResponseDto[]>>(
        '/vendor/get-vendorproduct',
        { withCredentials: true }
      );
      console.log('chek the response to here ',response);
      console.log('chek the response to here ',response);
      console.log('chek the response to here ',response);
      console.log('chek the response to here ',response);
      console.log('chek the response to here ',response);
      return response.data.data;
    },
    placeholderData: (prev) => prev,
  });
};






export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: async ({ productId, data }: IUpdateProduct) => {
      const res = await AxiosInstance.put(
        `/vendor/update-product/${productId}`,  
        data,
        { withCredentials: true }
      );
      return res.data;
    },
  });
};
