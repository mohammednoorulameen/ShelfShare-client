import { lazy } from "react"
import type { RouteObject } from "react-router-dom"
import ProtectedRoute from "./protector/ProtectedRoute"
import { Role } from "@/types/role.enum"


const VendorDashboard = lazy(() => import("@/features/home/vendor/VendorDashboard"))

export const VendorRoutes: RouteObject[] = [
  {
    path: "/vendor",
    children: [
      { path: "", element:
        <ProtectedRoute allowedRoles={[Role.VENDOR]}>
         <VendorDashboard/> 
        </ProtectedRoute>
        },
    ],
  },
]
