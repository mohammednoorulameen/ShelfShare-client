

  /*-----
   Auth Slice types
  ---------------*/


export interface AuthSliceState{
    email : string | null,
    userId? : string | null,
    vendorId? :  string | null,
    role : 'user' | "admin" | "vendor" | null,
    isAuthenticated : boolean;
}



  /*-----
   Auth Slice Payload types
  ---------------*/

  export interface LoginPayload{
    email : string,
    role : 'user' | "admin" | "vendor",
    userId? : string,
    vendorId? :  string
  }
