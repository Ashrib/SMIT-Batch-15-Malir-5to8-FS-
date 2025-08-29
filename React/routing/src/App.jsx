import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import AboutUs from './pages/about-us.jsx'
import LandingPage from './pages/landingPage.jsx'
import Home from './pages/home.jsx'
import ThirdFloor from './pages/thirdFloor.jsx'
import Hall from './pages/hall.jsx'
import Foodcourt from './pages/foodcourt.jsx'
import Navbar from './components/Navbar.jsx'
import FirstFloor from './pages/firstFloor.jsx'

function App() {

  return (
    <>
      {/* <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<h2>not found</h2>}/>
     </Routes> */}

      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <h2>Ground floor</h2>
          </>
        } />
        <Route path='/firstfloor' element={
          <FirstFloor />
        } />
        <Route path='/secondfloor' element={
          <>
            <Navbar />
            <h2>2nd floor</h2>
          </>

        } />
        <Route path='thirdfloor' element={<ThirdFloor />}> 
          <Route index element={<Hall />} />
          <Route path='foodcourt' element={<Foodcourt />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
