import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authcontext } from '../../Authcontext/Authcontext'
import Login from '../../pages/login/login'
export default function protectedRoute({children}) {
    const {islogedin}=useContext(authcontext)
  return (
    <div>


{localStorage.getItem("token")!=null?children:<Login/>}

    </div>


  )
}
