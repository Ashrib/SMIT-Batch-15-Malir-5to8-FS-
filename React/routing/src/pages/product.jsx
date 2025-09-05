import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

const Product = () => {
  let { id } = useParams() // get params
  let nagviate = useNavigate()
  const [product, setProduct] = useState(null)
  console.log('params id: ', id)

  let getProducts = async () => {
    try {
      let data = await axios.get(`https://dummyjson.com/products/${id}`)
      console.log(data.data)
      setProduct(data?.data)
    } catch (error) {

      console.error(error)
      setTimeout(()=>{
        nagviate('/products') // to change the route after 2s
      },2000)
    }
  }

  useEffect(() => {

    // get products data
    getProducts() 
  }, [])


  return (
    <>
    {(!product)?  // check if data exist or not
    <h2>no such product</h2>
  :
    <div className='flex m-3 flex-col border-2 items-center p-2'>

      <img className='size-62' src={product?.thumbnail} alt={product?.title} />
      <div className='flex flex-col items-center'>
        <span className='text-3xl'>
          {product?.title}
        </span>
        
        <span className='text-green-400'>
          category: {product?.category}
        </span>
        <span className=''>
          {product?.description}
        </span>
        <span className=''>
          Price $:{product?.price}
        </span>
         <span className='text-blue-500'>
          Rating :{product?.rating}
        </span>
      </div>
    </div>
  
  }   
    </>
  )
}

export default Product