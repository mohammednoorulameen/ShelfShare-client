import AccountDashboard from '../components/AccountDashboard'
import { useGetUser } from '../api/userPersonalInfoApi';

const AccountDashboardPage = () => {
     const { data: user } = useGetUser();

  return (
    <div>
        <AccountDashboard user={user} />
    </div>
  )
}

export default AccountDashboardPage