import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protector/ProtectedRoute";
import { Role } from "@/types/role.enum";
import UserLayout from "@/Layout/UserLayout";
import AccountDashboardPage from "@/features/account/user/pages/AccountDashboardPage";
import ResetPasswordPage from "@/features/auth/common/Pages/ResetPasswordPage";
import PersonalInfoPage from "@/features/account/user/pages/PersonalInfoPage";


// // const Home = lazy(() => import("@/features/home/user/Home"));



export const userRoutes: RouteObject[] = [
  {
    path: "/user",
 element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <UserLayout />
          </ProtectedRoute>
        ),
    children: [
      {
        path: "profile",
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <AccountDashboardPage/>
          </ProtectedRoute>
        ),
         children : [

          {
          path : "personalinfo",
          element : (
            <ProtectedRoute allowedRoles={[Role.USER]}>
              <PersonalInfoPage/>
            </ProtectedRoute>
          )
         },
          {
          path : "changepassword",
          element : (
            <ProtectedRoute allowedRoles={[Role.USER]}>
              <ResetPasswordPage/>
            </ProtectedRoute>
          )
         }


        ]
      },












    ],
  },
];
