import { Role } from "@/types/role.enum";
import type { AuthSliceState, LoginPayload } from "../../types/authSlice.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const getSavedState = () => {
  const admin = localStorage.getItem("adminAuth");
  const user = localStorage.getItem("userAuth");
  const vendor = localStorage.getItem("vendorAuth");

  return admin
    ? JSON.parse(admin)
    : user
    ? JSON.parse(user)
    : vendor
    ? JSON.parse(vendor)
    : {
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
