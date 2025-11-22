import { Formik } from "formik";
import LoginForm from "../../common/components/LoginForm";
import { LoginValidationSchema } from "../../common/components/Validations";
import { useAdminLoginMutation } from "../api/AdminAuthApi";
import toast from "react-hot-toast";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { useDispatch } from "react-redux";
import { setAuthLogin } from "../../common/slices/authSlice";
import { redirectByRole } from "@/app/routes/RedirectByRole/RoleRedirection";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

const AdminLoginPage = () => {
  const loginMutation = useAdminLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => {
          loginMutation.mutate(
            { ...values, role: "admin" },
            {
              onSuccess: (response) => {
                toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
                const admin = response.data;
                dispatch(
                  setAuthLogin({
                    email: admin.email,
                    role: admin.role,
                    userId: admin.userId,
                  })
                );
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
        <LoginForm type="admin" />
      </Formik>
    </div>
  );
};

export default AdminLoginPage;
