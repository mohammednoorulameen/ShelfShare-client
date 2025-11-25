// import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protector/ProtectedRoute";
import { Role } from "@/types/role.enum";
import UserLayout from "@/Layout/UserLayout";
import UserProfile from "@/features/account/user/UserProfile";

// // const Home = lazy(() => import("@/features/home/user/Home"));

// export const userRoutes: RouteObject[] = [
//   {
//     path: "/user",
//     children: [
//       {
//         path: "",
//         element: (
//           <ProtectedRoute allowedRoles={[Role.USER]}>
//             <UserLayout />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/user/profile",
//         element: (
//           <ProtectedRoute allowedRoles={[Role.USER]}>
//             <UserProfile />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ];

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
            <UserProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
