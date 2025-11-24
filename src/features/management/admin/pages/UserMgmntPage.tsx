import React, { useState } from 'react'
import UserMgmnt from '../component/UserMgmnt'
import { useBlockUser, useGetUsers } from '../api/adminUserMgmntApi';
import type { User } from '../../types/responseUser.types';

const UserMgmntPage = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useGetUsers(page, 10);
    const adminBlockUser = useBlockUser()


    const vendors : User[] = data?.data ?? []
  return (
    <div>
        <UserMgmnt
        users = {vendors}
        page = {page}
        totalPages = {data?.totalPages ?? 1}
        setPage = {setPage}
        isLoading = {isLoading}
        isError = {isError}
        onToggleBlock={adminBlockUser.mutate}
        />
    </div>
  )
}

export default UserMgmntPage