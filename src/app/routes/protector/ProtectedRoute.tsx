import { useAppSelector } from "@/app/hooks/useRedux";
import { Role } from "@/types/role.enum";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles: Role[];
}) => {
  const isAuthenticated = useAppSelector((state) => state.auth);
  console.log(isAuthenticated)
  if (!isAuthenticated.isAuthenticated) {
      const target = allowedRoles[0].toLowerCase();
      return <Navigate to={`/auth/${target}/login`} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;