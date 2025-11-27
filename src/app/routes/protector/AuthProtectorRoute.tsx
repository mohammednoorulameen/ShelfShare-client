import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks/useRedux";
import { Role } from "@/types/role.enum";

import type { ReactNode } from "react";

const AuthProtectorRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useAppSelector((state) => state.auth);
  console.log(isAuthenticated)
  if (isAuthenticated.isAuthenticated) {
    if (isAuthenticated.role === Role.USER) {
      return <Navigate to="/user" replace />;
    }
    if (isAuthenticated.role === Role.VENDOR) {
      return <Navigate to="/vendor" replace />;
    }
    if (isAuthenticated.role === Role.ADMIN) {
      return <Navigate to="/admin" replace />;
    }
  }

  return <>{children}</>;
};

export default AuthProtectorRoute;

