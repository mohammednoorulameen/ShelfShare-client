import { useSearchParams, useNavigate } from "react-router-dom";
import { useForgotVerifyEmail } from "../api/CommonApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";

const ForgotVerifyPage = () => {
  const [params] = useSearchParams();
  const token = params.get("token")!;
  const navigate = useNavigate();

  const { isSuccess, isError, data } = useForgotVerifyEmail(token);

  useEffect(() => {
    if (isSuccess) {
          const role = data.role;
          console.log('ferljfhnvflivnelifnvblisefjlnvf',role)
      toast.success(SUCCESS_MESSAGES.TOKEN_VERIFIED);
      navigate(`/auth/reset-password?token=${token}&role=${role}`);
    }
    if (isError) {
        console.log('error')
      toast.error(ERROR_MESSAGES.SOMETHING_WENT_WRONG);
      navigate("/auth/forgot-password");
    }
  });

  return <div>Verifying.......</div>;
};

export default ForgotVerifyPage;
