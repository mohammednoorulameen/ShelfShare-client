import { Formik } from "formik";
import LoginForm from "../../common/components/LoginForm";
import { LoginValidationSchema } from "../../common/components/Validations";
import { useVendorLoginMutation } from "../api/VentorAuthApi";
import toast from "react-hot-toast";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { useDispatch } from "react-redux";
import { setAuthLogin } from "../../common/slices/authSlice";
import { redirectByRole } from "@/app/routes/RedirectByRole/RoleRedirection";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

const VendorLoginPage = () => {
  const loginMutation = useVendorLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => {
          loginMutation.mutate(
            { ...values, role: "vendor" },
            {
              onSuccess: (response) => {
                toast.success(SUCCESS_MESSAGES.LOGIN_SUCCESS);
                const vendor = response.data;
                dispatch(
                  setAuthLogin({
                    email: vendor.email,
                    role: vendor.role,
                    vendorId: vendor.vendorId,
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
        <LoginForm type="vendor" />
      </Formik>
    </div>
  );
};

export default VendorLoginPage;
