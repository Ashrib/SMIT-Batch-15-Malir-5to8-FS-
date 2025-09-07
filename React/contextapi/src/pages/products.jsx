import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link, Outlet } from 'react-router';
import ProductsList from '../components/ProductsList';

const Products = () => {
 

  return (
    <>
    
  <>
      <Navbar />
      <div className='text-4xl text-center '>Products</div>
      <div className='flex flex-col flex-wrap gap-2 py-2 px-4'>

        <Suspense fallback={<Loading/>}>
          <ProductsList/>
        </Suspense>

      </div>
  </>

    </>

  )
}

export default Products



let Loading = ()=>{
  return(
    <h2>loading....</h2>
  )
}