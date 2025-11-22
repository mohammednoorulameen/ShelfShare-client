import React from 'react'
import { useRoutes } from "react-router-dom"
import { AuthRoutes } from './AuthRoutes'
import { userRoutes } from './UserRoutes'
import { ERROR_MESSAGES } from '../constants/messages'
import { VendorRoutes } from './VendorRoutes'
import { AdminRoutes } from './AdminRoutes'

const AppRoutes = () => {

    const routes = [
        ...AuthRoutes,
        ...userRoutes,
        ...VendorRoutes,
        ...AdminRoutes,
         { path: "*", element: <div>{ERROR_MESSAGES.PAGE_NOT_FOUND}</div>}
    ]
    return useRoutes(routes)
}

export default AppRoutes