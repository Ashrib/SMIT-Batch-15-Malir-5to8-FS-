import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeContext.jsx'

const Home = () => {

  let {theme} = useContext(ThemeContext)
console.log(theme)

  return (
    <div className={`${(theme)==='dark'? 'bg-gray-700 text-white': 'bg-white-700 text-black'}`} >
      <Navbar/>
      <h2>
        this is home
      </h2>

    </div>
  )
}

export default Home