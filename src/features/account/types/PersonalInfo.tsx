import type { AuthSliceState } from "@/features/auth/types/authSlice.type";
import type { FormikProps } from "formik";


export interface PersonalInfoProps {
  user: AuthSliceState;
}


export interface PersonalInfoFormikProps {
     user: AuthSliceState;
     formik: FormikProps<{
    userName: string;
    phoneNumber: string;
    image: string | null;
    imageFile: File | null;
   }>
    isEditing: boolean;
  onEdit: () => void;
}