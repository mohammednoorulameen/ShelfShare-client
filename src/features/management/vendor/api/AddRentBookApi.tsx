import { AxiosInstance } from "@/lib/axios/axios"
import { useMutation } from "@tanstack/react-query"
import type { IProductPayload } from "../../types/product.types"



export const useAddProductMutation = ()=>{
    return useMutation({
        mutationFn:async(payload : IProductPayload)=>{
            const response = await AxiosInstance.post('/vendor/vendor-addproduct',payload)
            return response.data
        }
    })
}