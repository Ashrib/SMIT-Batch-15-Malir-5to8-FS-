import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './page/LandingPage'
import Auth from './page/Auth'
import Login from './page/Login'
import Register from './page/Register'
import { AuthContext } from './context/AuthContext'
import Dashboard from './page/Dashboard'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user ?

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
        :

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      }


    </>
  )
}

export default App
