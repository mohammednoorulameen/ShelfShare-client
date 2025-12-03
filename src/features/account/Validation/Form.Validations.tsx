
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
