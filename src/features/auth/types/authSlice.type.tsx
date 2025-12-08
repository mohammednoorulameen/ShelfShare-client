/*-----
   Auth Slice types
  ---------------*/

export interface AuthSliceState {
  email: string | null;
  userId?: string | null;
  vendorId?: string | null;
  role: "user" | "admin" | "vendor" | null;
  isAuthenticated: boolean;

  // userName?: string | null;
  // phoneNumber?: string | null;
  // imagekey?: string | null;
  // isEmailVerified?: boolean | null;
}

/*-----
   Auth Slice Payload types
  ---------------*/

export interface LoginPayload {
  email: string;
  role: "user" | "admin" | "vendor";
  userId?: string;
  vendorId?: string;

  // userName: string;
  // phoneNumber: string;
  // imagekey: string;
  // isEmailVerified: boolean;
}
