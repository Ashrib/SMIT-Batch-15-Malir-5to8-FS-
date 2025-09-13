import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link, Outlet } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {

    (async () => {
      try {
        let data = await axios.get('https://dummyjson.com/products');
        console.log(data.data)
        setProducts(data.data.products)
      } catch (error) {
        console.error(error)
      }

    })()


  }, [])



  return (
    <>
      <Navbar />
      <div className='text-4xl text-center '>Products</div>
      <div className='flex flex-col flex-wrap gap-2 py-2 px-4'>
        {(products.length > 0) ?
          products?.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <div 
                className='border-2 border-black rounded-1 p-2 flex flex-col items-center justify-center'
              >

                <img src={item?.thumbnail} alt={item?.title} className='size-32' />
                <span className='text-3xl'>{item?.title}</span>
              </div>
            </Link>
          ))


          :
          <h2>no products</h2>
        }
      </div>

    </>
  )
}

export default Products