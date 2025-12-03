import { useMutation } from "@tanstack/react-query";
import type { IUpdatePassword } from "../../types/UpdatePassword.types";
import { AxiosInstance } from "@/lib/axios/axios";



export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: async (data: IUpdatePassword) => {
      const response = await AxiosInstance.put("/user/update-password", data, {
        withCredentials: true,
      });
      return response.data;
    },
  });
};
