import React from 'react'

import { Navigate } from 'react-router-dom'
const AdminRoutes = ({children}) => {
    const isAdmin = localStorage.getItem("role")
    if(isAdmin !== 'admin'){
        return <Navigate to={"/dashboard"} replace/>
    }
    return children
  return (
    <div>AdminRoutes</div>
  )
}

export default AdminRoutes