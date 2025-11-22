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
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);
  if (!isAuthenticated) {
    if (!allowedRoles.includes(Role.USER)) {
      const target = allowedRoles[0].toLowerCase();
      return <Navigate to={`/auth/${target}/login`} replace />;
    }

    if (!allowedRoles.includes(role!)) {
      return <Navigate to="/" replace />;
    }
  }
  return children;
};

export default ProtectedRoute;
