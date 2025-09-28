import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct,newData } from '../redux/products/productSlice.js'

function Products() {
  const productInput = useRef()
  const dispatch = useDispatch()
  const products = useSelector((state)=> state.products.value)

  let addProductHandle = ()=>{
    dispatch(addProduct(productInput.current.value))
  }

  useEffect(()=>{
    /// get data from firestore
    //data
    //  dispatch(newData(docs.data))

  },[])

  
  return (
    <>
    <div>Products {products.length}</div>
    <div>
      <input ref={productInput} type="text" placeholder='enter product'/>
      <button onClick={()=>addProductHandle()}>add</button>
      <button onClick={()=>dispatch(newData(['a','b','c']))}>data change</button>
    </div>

    <div>
      {products?.map((item)=>(
        <h2>{item}</h2>
      ))}
    </div>

    </>
  )
}

export default Products