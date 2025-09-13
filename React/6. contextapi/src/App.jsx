import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route } from 'react-router'
import Home from './pages/home.jsx'
import AboutUs from './pages/aboutus.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import Products from './pages/products.jsx'

function App() {


  return (
   <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
   
   
   </>
  )
}

export default App
