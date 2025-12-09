import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ApiErrorResponse,
  ApiResponse,
  VendorResponseDto,
} from "../../types/vendorLayout.types";
import { AxiosInstance } from "@/lib/axios/axios";
import toast from "react-hot-toast";
import { SUCCESS_MESSAGES } from "@/app/constants/messages";
import type { AxiosError } from "axios";

/*--------
get vendor details  
----------------------*/
export const useGetVendor = () => {
  return useQuery<VendorResponseDto>({
    queryKey: ["vendor"],
    queryFn: async () => {
      const response = await AxiosInstance.get("/vendor/vendor-data");
      console.log("Vendor API response:", response.data);
      return response.data.data as VendorResponseDto;
    },
  });
};

/*------------
vendor reapply the verification
----------------------------------*/
export const useReapplyVendor = () => {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse, AxiosError<ApiErrorResponse>>({
    mutationFn: async () => {
      const res = await AxiosInstance.put("/vendor/vendor-reapply");
      return res.data;
    },

    onSuccess: () => {
      toast.success(SUCCESS_MESSAGES.REAPPLY_VENDOR);
      queryClient.invalidateQueries({ queryKey: ["vendor"] });
    },
    onError: (error) => {
      const msg = error.response?.data?.message || "Unexpected error occurred";
      toast.error(msg);
    },
  });
};
