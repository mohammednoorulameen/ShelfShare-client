
  /*-----
   Register  Form type
  ---------------*/


export interface IUserRegisterForm {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  imageKey: File | null | string ;
}

export interface IUserRegisterPayload {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  role: string;
  imageKey: string; 
}



export interface IVendorRegisterForm {
  bussinessName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  imageKey: File | null;
}



export interface IVendorRegisterPayload{
  bussinessName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  imageKey: string;
}


export interface FloatingInputProps {
   name: string; 
  label: string;
  type?: string;
}

export interface RegisterFormProps {
  type: "user" | "vendor";
  onFileChange: (file: File | null) => void;

}


  /*-----
   Login Form type
  ---------------*/


export interface LoginFormProps {
  type: "user" | "vendor" | "admin";
}

export interface FloatingInputProps {
  name: string;
  label: string;
  type?: string;
}


export interface ILoginPayload {
  email: string;
  password: string;
  role: "user" | "vendor" | "admin";
}
