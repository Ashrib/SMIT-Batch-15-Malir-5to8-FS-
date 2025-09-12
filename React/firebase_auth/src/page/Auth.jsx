import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <>
        <span className='text-2xl'>This is Auth Route</span>
        <Outlet/>
    </>

  )
}

export default Auth