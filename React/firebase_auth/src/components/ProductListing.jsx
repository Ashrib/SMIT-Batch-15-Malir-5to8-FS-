import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react'
import { db } from '../firebase/firebaseConfig.js';
import { AuthContext } from '../context/AuthContext.jsx';

const ProductListing = ({products}) => {

    let {setIsEdit, setEditProduct} = useContext(AuthContext)


    let deleteProducts = async(id)=>{
        try {
            await deleteDoc(doc(db, "products", id));
            console.log('successfully deleted.')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='flex flex-col p-3 gap-2'>
   { products?.map((product)=>(
       <div key={product?.pid} className='items-center border-2 p-3 flex justify-between'>
        <span>{product?.title}</span>
        <div className='flex gap-1'>
            <button
         className='border-1 rounded-3 p-2 bg-blue-300 hover:bg-red-500 hover:cursor-pointer'
         onClick={()=> {
            setIsEdit(true)
            setEditProduct(product?.id)
         }}
         >edit</button>
        <button
         className='border-1 rounded-3 p-2 bg-blue-300 hover:bg-red-500 hover:cursor-pointer'
         onClick={()=> deleteProducts(product?.id)}
         >delete</button>
        </div>

       </div>
    ))}
    </div>
  )
}

export default ProductListing