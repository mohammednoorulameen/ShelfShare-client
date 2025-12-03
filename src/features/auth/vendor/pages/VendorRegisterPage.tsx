import RegisterForm from "../../common/components/RegisterForm";

import { Formik } from "formik";
import type { IVendorRegisterForm } from "../../types/form.types";
import { imageUploadCloudinery } from "@/app/utils/imageUploadCloudinery";
import { useVendorRegisterMutation } from "../api/VentorAuthApi";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { useRef } from "react";


const VendorRegisterPage = () => {

  const vendorRegisterMutation = useVendorRegisterMutation();
  const fileInputRef = useRef<HTMLInputElement>(null);


  const initialValues: IVendorRegisterForm = {
    bussinessName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    imageKey: null,
  };

  const handleSubmit  =async (values : IVendorRegisterForm) =>{
    let imagekey = "";
    
      if (values.imageKey) {
        imagekey = await imageUploadCloudinery(values.imageKey as File);
      }

    const payload  = {
         bussinessName: values.bussinessName,
    email: values.email,
    phoneNumber: values.phoneNumber,
    password: values.password,
    confirmPassword: values.confirmPassword,
    role:"vendor",
    imageKey: imagekey,
    }

    vendorRegisterMutation.mutate(payload, {
      onSuccess: (data)=>{
        toast.success(SUCCESS_MESSAGES.REGISTER_SUCCESS)
        console.log('vendor register success', data)
      },

       onError: (error: unknown) => {
    const axiosError = error as AxiosError<{ message: string }>;

    toast.error(
      axiosError.response?.data?.message || ERROR_MESSAGES.REGISTER_FAILED
    );
  }
    })

  }
  return (
    <div>
   
   <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <RegisterForm
          type="vendor"
          onFileChange={(file) => setFieldValue("imageKey", file)}
           fileInputRef={fileInputRef} 
        />
      )}
    </Formik>
      
    </div>
  );
};

export default VendorRegisterPage;
