import UserFooter from '@/shared/UserFooter'
import UserHeader from '@/shared/UserHeader'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <UserHeader/>
            <Outlet/>
        <UserFooter/>
    </div>
  )
}

export default UserLayout