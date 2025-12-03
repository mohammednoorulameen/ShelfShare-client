
import * as Yup from "yup";

  
  /**
   * Personal info
   */
  

  
  export const PersonalInfoValidationSchema = Yup.object({
  userName: Yup.string()
    .required("Full name is required")
    .min(2, "Name is too short"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),

});


export const UpdatePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .min(5, "New password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Confirm password is required"),
});
