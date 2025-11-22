import VendorRegisterPage from "@/features/auth/vendor/pages/VendorRegisterPage";
import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import AuthProtectorRoute from "./protector/AuthProtectorRoute";
import AdminLoginPage from "@/features/auth/admin/pages/AdminLoginPage";
import VendorLoginPage from "@/features/auth/vendor/pages/VendorLoginPage";

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
    path: "/auth",
    children: [
      {
        path: "user/login",
        element: (
          <AuthProtectorRoute>
            <UserLoginpage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "user/register",
        element: (
          <AuthProtectorRoute>
            <UserRegisterPage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "emailverification",
        element: (
          <AuthProtectorRoute>
            <VerificationPage />
          </AuthProtectorRoute>
        ),
      },
      {
        path: "vendor/register",
        element: (
          <AuthProtectorRoute>
            <VendorRegisterPage />
          </AuthProtectorRoute>
        ),
      },{
        path: "vendor/login",
        element:(
          <AuthProtectorRoute>
            <VendorLoginPage/>
          </AuthProtectorRoute>
        )
      },

      {
        path: "admin/login",
        element:(
          <AuthProtectorRoute>
            <AdminLoginPage/>
          </AuthProtectorRoute>
        )
      },
    ],
  },
];
