import type { FormikProps } from "formik";



export interface IUpdatePassword {
  oldPassword: string;
  newPassword: string;
}

export interface IUpdatePasswordProps {
  formik: FormikProps<{
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>;
  loading: boolean;
}