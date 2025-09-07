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
import Products from './pages/products.jsx'
import Product from './pages/product.jsx'
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'

function App() {
  let isLogin = true
  let isAdmin = false

  return (
    <>
      {/* <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' >
        <Route index element={<Products/>}/>
        <Route path=':id' element={<Product/>}/>
      </Route>
      
      <Route path='*' element={<h2>not found</h2>}/>

     </Routes> */}

      {/* <Routes>
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
      </Routes> */}


        {/* protected routes */}
        {(isLogin)? 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={<Home/>}/>
          <Route path='/register' element={<Home/>}/>
          {isAdmin && <Route path='/adminpanel' element={<h2>Admin Panel</h2>}/>}

          <Route path='*' element={<h2>not found</h2>}/>
        </Routes>
      : 
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Login/>}/>
        </Routes>
      }

    </>
  )
}

export default App
