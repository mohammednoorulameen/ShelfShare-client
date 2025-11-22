import { useMutation } from "@tanstack/react-query"
import type { ILoginPayload } from "../../types/form.types"
import { AxiosInstance } from "@/lib/axios/axios"




export const useAdminLoginMutation = () =>{
    return useMutation({
        mutationFn:async(payload : ILoginPayload)=>{
            const response = await AxiosInstance.post('/auth/login', payload)
            console.log('payload', response.data)
            return response.data
        }
    })
}