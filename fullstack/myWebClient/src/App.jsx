import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import useAuth from './context/authStore.js'

function App() {

  let navigate = useNavigate()

let auth = useAuth((state)=> state.user)
console.log("auth user in app.jsx:", auth)

if(auth){
  navigate('/')
}

  return (
    <>
    {
      auth?

    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<h2>404 not found</h2>} /> 
    </Routes>

    :
    <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="*" element={<h2>404 not found</h2>} /> 
    </Routes>
    }

    </>
  )
}

export default App
