import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protector/ProtectedRoute";
import { Role } from "@/types/role.enum";
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
            <Greeting/>
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
        path: "overview",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <AdminOverviewPage/>
         </ProtectedRoute>
        ),
      },
    ],
  },
];
