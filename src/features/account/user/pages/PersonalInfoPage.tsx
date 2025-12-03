import { useState } from "react";
import { Formik } from "formik";
import { PersonalInfoValidationSchema } from "../../Validation/Form.Validations";
import PersonalInfo from "../components/PersonalInfo";
import { toast } from "react-hot-toast";
import { useGetUser, useUpdateUserInfo } from "../api/userPersonalInfoApi";
import { ERROR_MESSAGES } from "@/app/constants/messages";
import { isAxiosError } from "axios";
import { imageUploadCloudinery } from "@/app/utils/imageUploadCloudinery";

const PersonalInfoPage = () => {
  const { data: user, isLoading } = useGetUser();
  const updateUserInfo = useUpdateUserInfo();

  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  
  const initialValues = {
    userName: user?.userName ?? "",
    phoneNumber: user?.phoneNumber ?? "",
    imageKey: user?.imageKey ?? null,
     imageFile: null as File | null,
   
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log('check values',values)
    let imageUrl = user?.imageKey;
     if (values.imageFile) {
    imageUrl = await imageUploadCloudinery(values.imageFile as File);
  }
    const payload = {
      userName: values.userName,
      phoneNumber: values.phoneNumber,
       imageKey: imageUrl,
    };

    updateUserInfo.mutate(payload, {
      onSuccess: () => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      },
      onError: (error) => {
        let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG;
        if (isAxiosError(error)) {
          message = error.response?.data?.message || message;
        }
        toast.error(message);
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonalInfoValidationSchema}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <PersonalInfo
            user={user}
            formik={formik}
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
            onCancel={() => {
              formik.resetForm();
              setIsEditing(false);
            }}
            saving={updateUserInfo.isPending}
          />
        </form>
      )}
    </Formik>
  );
};

export default PersonalInfoPage;



