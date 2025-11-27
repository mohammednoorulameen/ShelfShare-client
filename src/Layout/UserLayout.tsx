import BottomNavs from '@/shared-ui/BottomNavs'
import UserFooter from '@/shared/UserFooter'
import UserHeader from '@/shared/UserHeader'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <UserHeader/>
        <BottomNavs/>
            <Outlet/>
        <UserFooter/>
    </div>
  )
}

export default UserLayout