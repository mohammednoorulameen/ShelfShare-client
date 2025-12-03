import { useQuery } from "@tanstack/react-query";
import type { VendorResponseDto } from "../../types/vendorLayout.types";
import { AxiosInstance } from "@/lib/axios/axios";

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

