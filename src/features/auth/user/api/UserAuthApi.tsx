
import { AxiosInstance } from "@/lib/axios/axios";
import { useMutation } from "@tanstack/react-query";
import type {  ILoginPayload, IUserRegisterPayload } from "../../types/form.types";

export const useUserRegisterMutation = ()=>{
    return useMutation({
        mutationFn:async(payload : IUserRegisterPayload)=>{
            const response = await AxiosInstance.post('/auth/register',payload)
            return response.data
        }
    })
}

export const useUserLoginMutation = ()=>{
    return useMutation({
        mutationFn:async(payload : ILoginPayload)=>{
            const response = await AxiosInstance.post('/auth/login',payload)
            return response.data
        }
    })
}