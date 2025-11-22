
import { AxiosInstance } from "@/lib/axios/axios";
import { useMutation } from "@tanstack/react-query";
import type { ILoginPayload, IVendorRegisterPayload } from "../../types/form.types";


export const useVendorRegisterMutation = ()=>{
    return useMutation({
        mutationFn:async(payload : IVendorRegisterPayload)=>{
            const response = await AxiosInstance.post('/auth/register',payload)
            return response.data
        }
    })
}


export const useVendorLoginMutation = ()=>{
    return useMutation({
        mutationFn:async(payload: ILoginPayload)=>{
            const response = await AxiosInstance.post('/auth/login',payload)
            console.log('payload', response.data)
            return response.data
        }
    })
}