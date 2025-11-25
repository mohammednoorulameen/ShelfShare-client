import { AxiosInstance } from "@/lib/axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useVerifyEmail = (token: string) => {
  return useQuery({
    queryKey: ["verifyEmail", token],
    queryFn: async () => {
      const respose = await AxiosInstance.get(
        `/auth/verifyemail?token=${token}`
      );
      return respose.data;
    },
    enabled: !!token,
  });
};

export const useLogoutApi = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await AxiosInstance.post("/auth/logout");
      return response.data;
    },
  });
};

export const useVerifyForgotPassword = () => {
  return useMutation({
    mutationFn: async (data: { email: string; role: string }) => {
      const response = await AxiosInstance.post("/auth/forgot-password", {
        data,
      });
      return response.data;
    },
  });
};

export const useForgotVerifyEmail = (token: string) => {
  return useQuery({
    queryKey: ["ForgotVerifyEmail", token],
    queryFn: async () => {
      const respose = await AxiosInstance.get(
        `/auth/forgot-password/verify?token=${token}`
      );
      return respose.data;
    },
    enabled: !!token,
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({
      token,
      newPassword,
    }: {
      token: string;
      newPassword: string;
    }) => {
      const response = await AxiosInstance.post("/auth/reset-password", {
        token,
        newPassword,
      });
      return response.data;
    },
  });
};
