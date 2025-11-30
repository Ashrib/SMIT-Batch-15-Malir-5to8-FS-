import React from 'react'
import useAuth from '../context/authStore.js'
import Cookie from 'js-cookie'
import Navbar from '../components/Navbar.jsx';


const Dashboard = () => {

let auth = useAuth((state)=> state.user);
// console.log("auth user in dashboard.jsx:", auth)

  return (
    <div>
      <Navbar/>

      <div className='mt-20'>
      <span>Dashbaord</span>

      </div>
    </div>
  )
}

export default Dashboard