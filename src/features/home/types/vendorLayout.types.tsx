import type { AdminVerifyStatus } from "@/app/constants/status";
import type { Role } from "@/types/role.enum";

/*-----
 vendor get response 
---------------*/

export interface VendorResponseDto {
  _id: string;
  vendorId: string;
  email: string;
  bussinessName: string;
  phoneNumber: string;
  imageKey?: string | null;
  status: "active" | "blocked";
  role: Role;
  isEmailVerified: boolean;
  isAdminVerifiedStatus: AdminVerifyStatus;
  adminRejectReason: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface ApiErrorResponse {
  message: string;
}

export interface VendorLayoutProps {
  onReapply: () => void;
  isReapplyLoading: boolean;
}
