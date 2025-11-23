import { Role } from "@/types/role.enum";
export const redirectByRole = (role: Role) => {
  switch (role) {
    case Role.USER:
      return "/user";
    case Role.VENDOR:
      return "/vendor";
    case Role.ADMIN:
      return "/admin";
    default:
      return "/auth/user/login";
  }
};


export const redirectByRoleLogin = (role: Role) => {
  switch (role) {
    case Role.USER:
      return "/auth/user/login";
    case Role.VENDOR:
      return "/auth/vendor/login";
    case Role.ADMIN:
      return "/auth/admin/login";
    default:
      return "/auth/user/login";
  }
};

// http://localhost:5173/auth/admin/login
// /auth/vendor/login