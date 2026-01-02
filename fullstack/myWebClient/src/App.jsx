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
import UsersPage from './pages/UsersPage.jsx'
import PostsPage from './pages/PostsPage.jsx'
import EditUser from './pages/EditUser.jsx'
import EditAccount from './pages/EditAccount.jsx'
import Chat from './pages/Chat.jsx'
import useUsers from './context/usersContext.js'
import ProfilePic from './pages/ProfilePic.jsx'

function App() {
  let navigate = useNavigate()

let auth = useAuth((state)=> state.user)
let users = useUsers((state)=> state.users)
console.log("users in app.jsx:", users);


// if(auth){
//   navigate('/')
// }





  return (
    <>
    {
      auth?
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile-pic" element={<ProfilePic />} />
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
