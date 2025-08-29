import React from 'react'
import { Link, Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const ThirdFloor = () => {
  return (
    <>
      <Navbar />
      <div className='text-center'>ThirdFloor</div>
      <div className='flex w-[100%] gap-2 justify-center items-center'>
        <button className='border-2 rounded-1 p-3 hover:cursor-pointer bg-blue-300'>
          <Link to={'/thirdfloor'}>
            go to hall
          </Link>
        </button>
        <button className='border-2 rounded-1 p-3 hover:cursor-pointer bg-blue-300'>
          <Link to={'/thirdfloor/foodcourt'}>
          go to foodcourt
          </Link>
          
          </button>
      </div>

      <Outlet />
    </>


  )
}

export default ThirdFloor