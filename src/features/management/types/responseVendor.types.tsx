// import type { AdminVerifyStatus } from "@/app/constants/status";

import type { AdminVerifyStatus } from "@/app/constants/status";

export interface Vendor {
  _id: string;
  vendorId: string;
  email: string;
  bussinessName: string;
  phoneNumber: string;
  imageKey?: string;
  status: string;
  role: string;
  isEmailVerified: boolean;
  isAdminVerifiedStatus: AdminVerifyStatus;

  createdAt: string;
  joinedAt: string;
}

export interface VendorListResponse {
  data: Vendor[];
  total: number;
  limit: number;
  page: number;
  totalPages: number;
}

export interface VerifyVendorPayload {
  vendorId: string;
  action: "approved" | "rejected";
  reason?: string;
}

export interface VendorMgmntProps {
  vendors: Vendor[];
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;

  // 🔥 NOW IT ACCEPTS AN OBJECT (CORRECT)
  onToggleVerify: (data: VerifyVendorPayload) => void;

  onToggleBlock: (vendorId: string) => void;
}



//   /*--------------
//    Get all Vendors response type
//  ----------------------------------------*/

// // import type React from "react";

// export interface Vendor {
//   _id: string;
//   vendorId: string;
//   email: string;
//   bussinessName: string;
//   phoneNumber: string;
//   imageKey?: string;
//   // isActive: boolean;
//   status: string;
//   role: string;
//   isAdminVerified: boolean;
//   isEmailVerified: boolean;
//   createdAt: string;
//   joinedAt: string;
// }

// export interface VendorListResponse {
//   data: Vendor[];
//   total: number;
//   limit: number;
//   page: number;
//   totalPages: number;
// }

// export interface VendorMgmntProps{
//   vendors : Vendor[];
//   page : number;
//   totalPages: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>
//   isLoading : boolean;
//   isError : boolean;
//   onToggleBlock:(vendorId: string)=> void
//   onToggleVerify:(vendorId: string)=> void
//   onReject?: (vendorId: string, reason: string) => void;
// }
