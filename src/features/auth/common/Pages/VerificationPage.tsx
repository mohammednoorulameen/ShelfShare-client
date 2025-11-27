import { useEffect } from "react";
import { useVerifyEmail } from "../api/CommonApi";
import EmailVerification from "../components/EmailVerification";
import { useNavigate, useSearchParams } from "react-router-dom";
import { redirectByRoleLogin } from "@/app/routes/RedirectByRole/RoleRedirection";

const VerificationPage = () => {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const navigate = useNavigate()

  const { isLoading, isError, isSuccess, data } = useVerifyEmail(token);
  const role = data?.role

  useEffect(()=>{
    if(isSuccess){
      const timer = setTimeout(()=>{
        console.log('first',role)
        const redirectPath = redirectByRoleLogin(role)
        navigate(redirectPath, {replace:true})
      },3000)

      return ()=> clearTimeout(timer)
    }
  },[isSuccess,navigate,role])

  

  if (isLoading) return <EmailVerification state="processing" />;
  if (isError) return <EmailVerification state="failed" />;
  return <EmailVerification state="success" />;
};

export default VerificationPage;
