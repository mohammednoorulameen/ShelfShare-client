
import * as Yup from "yup";

  
  /**
   * Personal info
   */
  
  export const PersonalInfoValidationSchema = Yup.object({
  
 fullname: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
  });
  