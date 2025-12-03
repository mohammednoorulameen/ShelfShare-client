import { Formik } from "formik";
import LoginForm from "../../common/components/LoginForm";
import { LoginValidationSchema } from "../../common/components/Validations";
import {
  useGoogleLoginMutation,
  useUserLoginMutation,
} from "../api/UserAuthApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { isAxiosError } from "axios";
import { redirectByRole } from "../../../../app/routes/RedirectByRole/RoleRedirection";
import { useDispatch } from "react-redux";
import { setAuthLogin } from "../../common/slices/authSlice";

const UserLoginPage = () => {
  const loginMutation = useUserLoginMutation();
  const googleLoginMutation = useGoogleLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLogin = (idToken: string) => {
    googleLoginMutation.mutate(idToken, {
      onSuccess: (response) => {
        toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
        const user = response.data;
        dispatch(
          setAuthLogin({
            email: user.email,
            role: user.role,
            userId: user.userId,
            userName: user.userName,
            phoneNumber: user.phoneNumber,
            imagekey: user.imagekey,
            isEmailVerified: user.isEmailVerified,
          })
        );

        const redirectPath = redirectByRole(user.role);
        navigate(redirectPath);
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
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginValidationSchema}
      onSubmit={(values) => {
        loginMutation.mutate(
          { ...values, role: "user" },
          {
            onSuccess: (response) => {
              toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
              const user = response.data;
              dispatch(
                setAuthLogin({
                  email: user.email,
                  role: user.role,
                  userId: user.userId,
                  userName: user.userName,
                  phoneNumber: user.phoneNumber,
                  imagekey: user.imagekey,
                  isEmailVerified: user.isEmailVerified,
                  // vendorId: user.vendorId,
                })
              );
              console.log("checke the role ", response.data.role);
              const redirectPath = redirectByRole(response.data.role);
              navigate(redirectPath);
            },
            onError: (error) => {
              let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG;
              if (isAxiosError(error)) {
                message = error.response?.data?.message || message;
              }
              toast.error(message);
            },
          }
        );
      }}
    >
      <LoginForm type="user" googleLogin={handleGoogleLogin} />
    </Formik>
  );
};

export default UserLoginPage;
