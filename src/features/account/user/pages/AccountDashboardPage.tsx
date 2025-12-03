import AccountDashboard from '../components/AccountDashboard'
import { useGetUser } from '../api/userAccountApi';

const AccountDashboardPage = () => {
     const { data: user } = useGetUser();

  return (
    <div>
        <AccountDashboard user={user} />
    </div>
  )
}

export default AccountDashboardPage