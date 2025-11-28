import React from 'react'
import Navbar from '../components/Navbar'
import useAuth from '../context/authStore.js'



const LandingPage = () => {

const auth = useAuth((state)=> state.user)
console.log("auth user in landing page:", auth)

  return (
    <div>

        <Navbar/>

        <h2 className='mt-20'>Landing Page</h2>
    </div>
  )
}

export default LandingPage