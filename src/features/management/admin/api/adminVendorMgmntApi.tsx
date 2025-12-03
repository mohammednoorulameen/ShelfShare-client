import { AxiosInstance } from "@/lib/axios/axios"
import type { VendorListResponse } from "../../types/responseVendor.types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";




export const useGetVentors = (page: number, limit: 10)=>{
    return useQuery({
        queryKey : ["vendors", page, limit],
        queryFn : async ()=> {
            const response = await AxiosInstance.get<VendorListResponse>(`/admin/allvendors?page=${page}&limit=${limit}`);
            
            return response.data
        },
        placeholderData: (prev)=> prev
    })
}

export const useVerifyVentor = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
           mutationFn:async(vendorId:string)=>{
        const response = await AxiosInstance.patch(`/admin/vendors/${vendorId}/toggle-verify`)
            return response.data
           },
        onSuccess : () =>[
          queryClient.invalidateQueries({queryKey: ['vendors']})
        ]  
    })
}

export const useBlockVentor = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
           mutationFn:async(vendorId:string)=>{
        const response = await AxiosInstance.patch(`/admin/vendors/${vendorId}/toggle-block`)
            return response.data
           },
        onSuccess : () =>[
          queryClient.invalidateQueries({queryKey: ['vendors']})
        ]  
    })
}

