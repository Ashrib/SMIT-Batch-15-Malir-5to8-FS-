import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router'
import Counter from './pages/Counter.jsx'
import Products from './pages/Products.jsx'

function App() {
  

  return (
    <>

    
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
