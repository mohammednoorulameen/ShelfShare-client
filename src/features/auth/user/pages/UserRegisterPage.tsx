import RegisterForm from "../../common/components/RegisterForm";

import { Formik } from "formik";
import { UserRegisterValidationSchema } from "../../common/components/Validations";
import type { IUserRegisterForm } from "../../types/form.types";
import { useUserRegisterMutation } from "../api/UserAuthApi";
import { imageUploadCloudinery } from "@/app/utils/imageUploadCloudinery";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { useRef } from "react";

const UserRegisterPage = () => {
  const userRegisterMutation = useUserRegisterMutation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialValues: IUserRegisterForm = {
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    imageKey: null,
  };
  const handleSubmit = async (values: IUserRegisterForm, resetForm: () => void) => {
    let imagekey = "";

    if (values.imageKey) {
      imagekey = await imageUploadCloudinery(values.imageKey as File);
    }
    const payload = {
      userName: values.userName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
      confirmPassword: values.confirmPassword,
      referralCode: values.referralCode || "",
      role: "user",
      imageKey: imagekey,
    };

    userRegisterMutation.mutate(payload, {
      onSuccess: (data) => {
        toast.success(SUCCESS_MESSAGES.REGISTER_SUCCESS);
        resetForm()
        if(fileInputRef.current){
          fileInputRef.current.value = ""
        }
        console.log("register success", data);
      },

       onError: (error: unknown) => {
    const axiosError = error as AxiosError<{ message: string }>;

    toast.error(
      axiosError.response?.data?.message || ERROR_MESSAGES.REGISTER_FAILED
    );
  }

    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={UserRegisterValidationSchema}
        onSubmit={(values,{resetForm})=> handleSubmit(values, resetForm)}
      >
        {({ setFieldValue }) => (
          <RegisterForm
            type="user"
            fileInputRef={fileInputRef} 
            onFileChange={(file) => setFieldValue("imageKey", file)}
          />
        )}
      </Formik>
    </div>
  );
};

export default UserRegisterPage;
