import React from 'react'
import useAuth from '../context/authStore.js'
import Cookie from 'js-cookie'
import Navbar from '../components/Navbar.jsx';
import { useEffect } from 'react';


const Dashboard = () => {
  
  let auth = useAuth((state)=> state.user);
  // console.log("auth user in dashboard.jsx:", auth)
  
  
    // Test event emission});



  return (
    <div>
      <Navbar/>

      <div className='mt-20 flex flex-col'>
      <span>Dashbaord</span>

      <button 
      className='border-2 p-2 mt-4 w-32 bg-blue-500 text-white rounded-lg'
      
      onClick={()=>{
        // socket.emit("test", "hello from client dashboard.jsx")
      }}
      
      >message send</button>


<button 
      className='border-2 p-2 mt-4 w-32 bg-blue-500 text-white rounded-lg'
      
      onClick={()=>{
        // db users update
        // socket.emit("userUpdate", "users updated from client dashboard.jsx")
      }}
      
      >user update</button>
      </div>
    </div>
  )
}

export default Dashboard