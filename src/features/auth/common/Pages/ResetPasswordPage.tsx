
import ResetPassword from "../components/ResetPassword";
import { Formik } from "formik";
import { ResetValidationSchema } from "../components/Validations";
import { useResetPassword } from "../api/CommonApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { isAxiosError } from "axios";
import { redirectByRoleLogin } from "@/app/routes/RedirectByRole/RoleRedirection";
import { Role } from "@/types/role.enum";

// import { redirectByRoleLogin } from "@/app/routes/RedirectByRole/RoleRedirection";

const ResetPasswordPage = () => {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const assingRole = params.get("role") || "user";
  const navigate = useNavigate();

  const { mutate, isPending } = useResetPassword();


const role: Role =
  assingRole === "user" ? Role.USER :
  assingRole === "vendor" ? Role.VENDOR :
  assingRole === "admin" ? Role.ADMIN :
  Role.USER;

  return (
    <Formik
      initialValues={{ newPassword: "" , confirmPassword: ""}}
      validationSchema={ResetValidationSchema}
      onSubmit={(values) =>{
        console.log('values', values)
      mutate(
            
          { token, newPassword: values.newPassword },
          {
            onSuccess: (data) => {
                console.log(data)
              toast.success(
                data?.message || SUCCESS_MESSAGES.PASSWORD_RESET_SUCCESS
              );
            //   navigate("/auth/user/login"); 
               const redirectPath = redirectByRoleLogin(role)
                    navigate(redirectPath, {replace:true})
            },
            onError: (error) => {
              let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG;
              if (isAxiosError(error)) {
                message = error.response?.data?.message || message;
              }
              toast.error(message);
            },
          }
        )
      }
      }
    >
      <ResetPassword type={role} isLoading={isPending} />
    </Formik>
  );
};

export default ResetPasswordPage;


