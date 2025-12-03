import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protector/ProtectedRoute";
import { Role } from "@/types/role.enum";
import UserMgmntPage from "@/features/management/admin/pages/UserMgmntPage";
import CategoryMgmntPage from "@/features/management/admin/pages/CategoryMgmntPage";
const AdminLayout = lazy(() => import( "@/features/home/admin/adminLayout/AdminLayout"));
const Greeting = lazy(() => import( "@/features/home/common/Greeting"));
const AdminOverviewPage = lazy(() => import( "@/features/overview/admin/pages/AdminOverviewPage"));
const VendorMgmntPage = lazy(() => import( "@/features/management/admin/pages/VendorMgmntPage"));

export const AdminRoutes: RouteObject[] = [
  {
      path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={[Role.ADMIN]}>
        <AdminLayout />
       </ProtectedRoute>
    ),
    children: [
       {
        path: "",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <Greeting role={'Admin'}/>
         </ProtectedRoute>
        ),
      },
      {
        path: "overview",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <AdminOverviewPage/>
         </ProtectedRoute>
        ),
      },
      {
        path: "vendormanagement",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <VendorMgmntPage/>
         </ProtectedRoute>
        ),
      },
      {
        path: "usermanagement",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <UserMgmntPage/>
         </ProtectedRoute>
        ),
      },
      {
        path: "categorymanagement",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <CategoryMgmntPage/>
         </ProtectedRoute>
        ),
      },
    ],
  },
];
