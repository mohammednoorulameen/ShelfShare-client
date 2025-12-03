// import { lazy } from "react"
import type { RouteObject } from "react-router-dom"
import ProtectedRoute from "./protector/ProtectedRoute"
import { Role } from "@/types/role.enum"
import VendorLayout from "@/features/home/vendor/vendorLayout/VendorLayout"
import Greeting from "@/features/home/common/Greeting"
import VendorOverviewPage from "@/features/overview/vendor/pages/VendorOverviewPage"


// const VendorDashboard = lazy(() => import("@/features/home/vendor/VendorDashboard"))

export const VendorRoutes: RouteObject[] = [
  {
 
      path: "/vendor",
    element: (
      <ProtectedRoute allowedRoles={[Role.VENDOR]}>
         <VendorLayout/> 
        </ProtectedRoute>
    ),
    children: [
       {
        path: "",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <Greeting role={'Vendor'}/>
         </ProtectedRoute>
        ),
      },
      {
        path: "overview",
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <VendorOverviewPage/>
         </ProtectedRoute>
        ),
      },
     
    ],
  },
]
