import * as Yup from "yup";

/**
 *  USER  VALIDATION SCHEMAS
 */

export const UserRegisterValidationSchema = Yup.object({
  userName: Yup.string().required("User name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  referralCode: Yup.string().optional(),
});

/**
 * VENDOR VALIDATION
 */

export const VendorRegisterValidationSchema = Yup.object({
  bussinessName: Yup.string().required("Business name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});



/**
 * login page 
 */

export const LoginValidationSchema = Yup.object({

 email: Yup.string().email("Invalid email").required("Email is required"),
 password: Yup.string().min(6).required("Password is required"),
});