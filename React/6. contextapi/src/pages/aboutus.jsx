import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeContext'

const AboutUs = () => {
  let {theme} = useContext(ThemeContext)
  return (
    <div className={`${(theme)==='dark'? 'bg-gray-700 text-white': 'bg-white-700 text-black'}`}>
      <Navbar/>
      <h2>
        this is AboutUs
      </h2>

    </div>
  )
}

export default AboutUs