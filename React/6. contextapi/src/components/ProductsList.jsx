import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const ProductsList = () => {

     const [products, setProducts] = useState([]);


  useEffect(() => {

    setTimeout(()=>{
        (async () => {
      try {
        let data = await axios.get('https://dummyjson.com/products');
        console.log(data.data)
        setProducts(data.data.products)
      } catch (error) {
        console.error(error)
      }

    })()
    },2000)


  }, [])

  return (
    <div>
        {
    
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

    }</div>
  )
}

export default ProductsList