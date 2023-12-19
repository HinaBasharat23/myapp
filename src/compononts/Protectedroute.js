import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login'


const Protectedroute = ({islogged}) => {
  return (
   islogged ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default Protectedroute;
