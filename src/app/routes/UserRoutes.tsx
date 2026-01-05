import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protector/ProtectedRoute";
import { Role } from "@/types/role.enum";
import UserLayout from "@/Layout/UserLayout";
import AccountDashboardPage from "@/features/account/user/pages/AccountDashboardPage";
import ResetPasswordPage from "@/features/auth/common/Pages/ResetPasswordPage";
import PersonalInfoPage from "@/features/account/user/pages/PersonalInfoPage";
import HomePage from "@/features/home/user/pages/HomePage";
import ExplorePage from "@/features/home/user/pages/ExplorePage";
import ProductDetailsPage from "@/features/home/user/pages/ProductDetailsPage";

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
      /* ================= HOME PAGE ================= */

      {
        index: true,
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user/explore",
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <ExplorePage />
          </ProtectedRoute>
        ),
      },

      /* ================= DASHBOARD ================= */
      {
        path: "profile",
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <AccountDashboardPage />
          </ProtectedRoute>
        ),

        children: [
          /* ================= PERSONAL INFO ================= */
          {
            path: "personalinfo",
            element: (
              <ProtectedRoute allowedRoles={[Role.USER]}>
                <PersonalInfoPage />
              </ProtectedRoute>
            ),
          },
          /* ================= CHANGE PASSWORD ================= */
          {
            path: "changepassword",
            element: (
              <ProtectedRoute allowedRoles={[Role.USER]}>
                <ResetPasswordPage />
              </ProtectedRoute>
            ),
          },
        ],
      },

      /* ================= PRODUCT DETAILS ================= */

      {
        path: "productdetails/:id",
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <ProductDetailsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
