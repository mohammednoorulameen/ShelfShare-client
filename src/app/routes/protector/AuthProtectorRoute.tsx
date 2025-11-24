import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks/useRedux";
import { Role } from "@/types/role.enum";
import type { JSX } from "react";

const AuthProtectorRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (isAuthenticated) {
    if (role === Role.USER && location.pathname.startsWith("/auth/user")) {
      return <Navigate to="/user" replace />;
    }
    if (role === Role.VENDOR && location.pathname.startsWith("/auth/vendor")) {
      return <Navigate to="/vendor" replace />;
    }

    if (role === Role.ADMIN && location.pathname.startsWith("/auth/admin")) {
      return <Navigate to="/admin" replace />;
    }

  }

  return children;
};

export default AuthProtectorRoute;





// import { Navigate } from "react-router-dom";
// import { useAppSelector } from "@/app/hooks/useRedux";
// import { Role } from "@/types/role.enum";
// import type { JSX } from "react";

// const AuthProtectorRoute = ({ children }: { children: JSX.Element }) => {
//   const { isAuthenticated, role } = useAppSelector((state) => state.auth);

//   if (isAuthenticated) {
//     if (role === Role.USER) return <Navigate to="/user" replace />;
//     if (role === Role.VENDOR) return <Navigate to="/vendor" replace />;
//     if (role === Role.ADMIN) return <Navigate to="/admin" replace />;
//   }

//   return children;
// };

// export default AuthProtectorRoute;


// import { useAppSelector } from "@/app/hooks/useRedux";
// import { Role } from "@/types/role.enum";
// import type { JSX } from "react";
// import { Navigate } from "react-router-dom";

// const AuthProtectorRoute = ({ children }: { children: JSX.Element }) => {
//   const { isAuthenticated, role } = useAppSelector((state) => state.auth);
//   if (isAuthenticated) {
//       if (role === Role.USER) return <Navigate to="/user" replace />;
//     if (role === Role.VENDOR) return <Navigate to="/vendor" replace />;
//     if (role === Role.ADMIN) return <Navigate to="/admin" replace />;
//     // switch (role) {
//     //   case Role.USER:
//     //     return <Navigate to="/user" replace />;
//     //   case Role.VENDOR:
//     //     return <Navigate to="/vendor" replace />;
//     //   case Role.ADMIN:
//     //     return <Navigate to="/admin" replace />;
//     //   default:
//     //     return <Navigate to="/user" replace />;
//     // }
//   }
//   return children;
// };

// export default AuthProtectorRoute;
