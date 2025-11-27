import { logout } from "@/features/auth/common/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./useRedux";
import {  redirectByRoleLogin } from "../routes/RedirectByRole/RoleRedirection";
import toast from "react-hot-toast";
import { SUCCESS_MESSAGES } from "../constants/messages";
import { useLogoutApi } from "@/features/auth/common/api/CommonApi";
import { Role } from "@/types/role.enum";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useAppSelector((state) => state.auth);
  const logoutMutation = useLogoutApi();

  const handleLogout = () => {
      const currentRole = role;
    logoutMutation.mutate(undefined, {
      onSettled: () => {
        dispatch(logout());
        toast.success(SUCCESS_MESSAGES.LOGOUT_SUCCESS);
        const redirectPath = redirectByRoleLogin(currentRole ?? Role.USER);
        navigate(redirectPath, { replace: true });
      },
    //    onError: () => {
    //   dispatch(logout());
    //   navigate("/auth/user/login", { replace: true });
    // }
    });
  };
  return handleLogout;
};

export default useLogout;
