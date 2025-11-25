import { Role } from "@/types/role.enum";
import type { AuthSliceState, LoginPayload } from "../../types/authSlice.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const getSavedState = () => {
  const path = window.location.pathname;

  let isWho: "admin" | "user" | "vendor" | null = null;
  if (path.startsWith("/admin") || path.startsWith("/auth/admin")) isWho = "admin";
  else if (path.startsWith("/user") || path.startsWith("/auth/user") || (path.startsWith("/") && !path.startsWith("/auth") && !path.startsWith("/vendor"))) isWho = "user";
  else if (path.startsWith("/vendor") || path.startsWith("/auth/vendor")) isWho = "vendor";
  console.log(path)
  
  const admin = localStorage.getItem("adminAuth");
  const user = localStorage.getItem("userAuth");
  const vendor = localStorage.getItem("vendorAuth");

  if (isWho === "admin" && admin) return JSON.parse(admin);
  if (isWho === "user" && user) return JSON.parse(user);
  if (isWho === "vendor" && vendor) return JSON.parse(vendor);

  return {
    email: null,
    role: null,
    vendorId: null,
    userId: null,
    isAuthenticated: false,
  };
};

const initialState: AuthSliceState = getSavedState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLogin(state, action: PayloadAction<LoginPayload>) {
      const { email, role, userId, vendorId } = action.payload;

      state.email = email;
      state.role = role;
      state.isAuthenticated = true;
      state.userId = userId ?? null;
      state.vendorId = vendorId ?? null;

      const data = {
        email,
        role,
        userId,
        vendorId,
        isAuthenticated: true,
      };

      if (role === Role.ADMIN) {
        localStorage.setItem("adminAuth", JSON.stringify(data));
      }
      if (role === Role.USER) {
        localStorage.setItem("userAuth", JSON.stringify(data));
      }
      if (role === Role.VENDOR) {
        localStorage.setItem("vendorAuth", JSON.stringify(data));
      }
    },

    logout(state) {
      if (state.role === Role.ADMIN) localStorage.removeItem("adminAuth");
      if (state.role === Role.USER) localStorage.removeItem("userAuth");
      if (state.role === Role.VENDOR) localStorage.removeItem("vendorAuth");

      state.email = null;
      state.role = null;
      state.userId = null;
      state.vendorId = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthLogin, logout } = authSlice.actions;
export default authSlice.reducer;
