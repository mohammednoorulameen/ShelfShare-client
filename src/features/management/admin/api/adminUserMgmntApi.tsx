import { AxiosInstance } from "@/lib/axios/axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { UserListResponse } from "../../types/responseUser.types"





export const useGetUsers = (page: number, limit: 10) =>{
    return useQuery({
        queryKey : ['users', page, limit],
        queryFn : async ()=> {
            const response = await AxiosInstance.get<UserListResponse>(`/admin/allusers?page=${page}&limit=${limit}`)
            return response.data
        },
        placeholderData: (prev)=> prev
    })
}


export const useBlockUser = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async(userId: string)=>{
            const response = await AxiosInstance.patch(`/admin/user/${userId}/toggled-block`)
            return response.data
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })
}