import {  useMutation, useQuery } from "@tanstack/react-query";
import type { IUpdateUserInfo, UserResponseDto } from "../../types/PersonalInfo.types";
import { AxiosInstance } from "@/lib/axios/axios";




export const useUpdateUserInfo = () => {


  return useMutation({
    mutationFn: async (data: IUpdateUserInfo) => {
      const response = await AxiosInstance.put(
        "/user/update-userinfo",
        data,
        { withCredentials: true }
      );
      return response.data;
    },
  });
};




export const useGetUser = () => {
  return useQuery<UserResponseDto>({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await AxiosInstance.get("/user/user-data");
      return data.data as UserResponseDto;
    },
  });
};



