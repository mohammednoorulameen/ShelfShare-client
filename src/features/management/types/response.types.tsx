

  /*--------------
   Get all Vendors response type
 ----------------------------------------*/

import type React from "react";


export interface Vendor {
  _id: string;
  vendorId: string;
  email: string;
  bussinessName: string;
  phoneNumber: string;
  imageKey?: string;
  // isActive: boolean;
  status: string;
  role: string;
  isAdminVerified: boolean;
  isEmailVerified: boolean;
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



export interface VendorMgmntProps{
  vendors : Vendor[];
  page : number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
  isLoading : boolean;
  isError : boolean;
  onToggleBlock: (vendorId: string)=> void
  onToggleVerify:(vendorId: string)=> void
}