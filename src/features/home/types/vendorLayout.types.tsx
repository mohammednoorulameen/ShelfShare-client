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
  isAdminVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}