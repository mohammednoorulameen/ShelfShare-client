import VendorRegisterPage from "@/features/auth/vendor/pages/VendorRegisterPage";
import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import AuthProtectorRoute from "./protector/AuthProtectorRoute";
import AdminLoginPage from "@/features/auth/admin/pages/AdminLoginPage";
import VendorLoginPage from "@/features/auth/vendor/pages/VendorLoginPage";
import ForgotPasswordPage from "@/features/auth/common/Pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/common/Pages/ResetPasswordPage";
import ForgotVerifyPage from "@/features/auth/common/Pages/ForgotVerifyPage";
import { Role } from "@/types/role.enum";

const UserLoginpage = lazy(
  () => import("@/features/auth/user/pages/UserLoginPage")
);
const UserRegisterPage = lazy(
  () => import("@/features/auth/user/pages/UserRegisterPage")
);
const VerificationPage = lazy(
  () => import("@/features/auth/common/Pages/VerificationPage")
);

export const AuthRoutes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "auth/user/login",
        element: (
          <AuthProtectorRoute>
            <UserLoginpage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "/",
        element: (
          <AuthProtectorRoute>
            <UserLoginpage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "auth/user/register",
        element: (
          <AuthProtectorRoute>
            <UserRegisterPage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "auth/emailverification",
        element: (
          <AuthProtectorRoute>
            <VerificationPage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "auth/vendor/register",
        element: (
          <AuthProtectorRoute>
            <VendorRegisterPage />
          </AuthProtectorRoute>
        ),
      },{
        path: "auth/vendor/login",
        element:(
          <AuthProtectorRoute>
            <VendorLoginPage/>
          </AuthProtectorRoute>
        )
      },

      {
        path: "auth/admin/login",
        element:(
          <AuthProtectorRoute>
            <AdminLoginPage/>
          </AuthProtectorRoute>
        )
      },
      {
        path: "auth/vendor/forgot-password",
        element:(
          <AuthProtectorRoute>
            <ForgotPasswordPage role= {Role.VENDOR}/>
          </AuthProtectorRoute>
        )
      },
       {
        path: "auth/user/forgot-password",
        element:(
          <AuthProtectorRoute>
            <ForgotPasswordPage role= {Role.USER}/>
          </AuthProtectorRoute>
        )
      },
      
      {
        path: "auth/forgot-password/verify",
        element:(
          <AuthProtectorRoute>
            <ForgotVerifyPage/>
          </AuthProtectorRoute>
        )
      },
       {
        path: "auth/reset-password",
        element:(
          <AuthProtectorRoute>
            <ResetPasswordPage/>
          </AuthProtectorRoute>
        )
      },
    ],
  },
];
