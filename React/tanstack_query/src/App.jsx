import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Route, Routes} from 'react-router'
import Recipes from './pages/Recipes.jsx'
import Recipe from './pages/Recipe.jsx'
import Todos from './pages/Todos.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Recipes/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path='/recipe/:id' element={<Recipe/>}/>
    </Routes>
    </>
  )
}

export default App
