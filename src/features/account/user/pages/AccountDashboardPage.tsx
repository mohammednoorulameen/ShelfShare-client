import React from 'react'
import AccountDashboard from '../components/AccountDashboard'
import { useAppSelector } from '@/app/hooks/useRedux'

const AccountDashboardPage = () => {
    const user = useAppSelector((state)=> state.auth)
  return (
    <div>
        <AccountDashboard user={user} />
    </div>
  )
}

export default AccountDashboardPage