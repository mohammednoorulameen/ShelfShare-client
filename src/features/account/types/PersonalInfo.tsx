import type { FormikProps } from "formik";


export interface PersonalInfoProps {
  user:UserResponseDto | undefined;
}


export interface PersonalInfoFormikProps {
     user:  UserResponseDto | undefined;
     formik: FormikProps<{
    userName: string;
    phoneNumber: string;
    imageKey: string | null;
    imageFile: File | null;
   }>
    isEditing: boolean;
  onEdit: () => void;
}

export interface IUpdateUserInfo {
  userName?: string;
  phoneNumber?: string;
  imageKey?: File | string | null;
}

export interface UserResponseDto {
  _id: string; 
  userId: string; 
  email: string;
  userName: string;
  phoneNumber: string;
  imageKey: string | null;
  referralCode: string;
  status: "active" | "blocked";
  isEmailVerified: boolean;
  isAdmin: boolean;
  role: "user" | "admin" | "vendor";
  createdAt: string;
  updatedAt: string;
}
