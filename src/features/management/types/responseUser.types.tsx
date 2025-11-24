/*--------------
   Get all users response type
 ----------------------------------------*/

export interface User {
  _id: string;
  userId: string;
  email: string;
  userName: string;
  phoneNumber: string;
  imageKey?: string;
  status: string;
  role: string;
  isEmailVerified: boolean;
  createdAt: string;
}

export interface UserListResponse{
    data: User[];
    total : number;
    limit: number;
    page: number;
    totalPages: number;
}

export interface UserMgmntProps{
    users: User[];
    page: number;
    totalPages: number;
    setPage : React.Dispatch<React.SetStateAction<number>>
    isLoading : boolean;
    isError: boolean;
    onToggleBlock:(userId: string)=> void
}