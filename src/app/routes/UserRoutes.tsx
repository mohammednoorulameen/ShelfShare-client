import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./protector/ProtectedRoute";
import { Role } from "@/types/role.enum";

const Home = lazy(() => import("@/features/home/user/Home"));

export const userRoutes: RouteObject[] = [
  {
    path: "/user",
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute allowedRoles={[Role.USER]}>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
