import { AxiosInstance } from "@/lib/axios/axios"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useVerifyEmail = (token : string)=>{
    return useQuery({
        queryKey : ["verifyEmail",token],
        queryFn: async ()=>{
            const respose = await AxiosInstance.get(`/auth/verifyemail?token=${token}`)
            return respose.data
        },
        enabled: !!token
    })
}


export const useLogoutApi = () => {
    return useMutation({
        mutationFn:async()=> {
            const response = await AxiosInstance.post("/auth/logout");
            return response.data
        }
    })
}
