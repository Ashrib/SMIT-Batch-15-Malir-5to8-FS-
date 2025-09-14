import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import ProductListing from '../components/ProductListing';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  let productInput = useRef()
  const [products, setProducts] = useState([])
  const { isEdit, setIsEdit, editProduct } = useContext(AuthContext)

  let addProduct = async () => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        title: productInput.current.value,
        pid: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  let editProductHandler = async() => {
    try {

      const docRef = doc(db, "products",editProduct);

      // Set the "capital" field of the city 'DC'
      await updateDoc(docRef, {
        title: productInput.current.value,
      });

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // Real-time listener for products collection
    const unsubscribe = onSnapshot(collection(db, "products"), (querySnapshot) => {
      let productsArr = [];
      querySnapshot.forEach((doc) => {
        productsArr.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productsArr);
      console.log(productsArr);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [])

  return (
    <div>
      <Navbar />
      <div>This is Dashboard</div>

      <div>
        <input ref={productInput} className='border-2 p-2' type='text' placeholder='add product' />

        {isEdit ?
          <div>
            <button className='border-2 p-2 rounded-1 bg-blue-400'
              onClick={() => editProductHandler()}
            >update</button>
            <button className='border-2 p-2 rounded-1 bg-red-400'
              onClick={() => setIsEdit()}
            >cancel</button>
          </div>

          :
          <button className='border-2 p-2 rounded-1 bg-blue-400'
            onClick={() => addProduct()}
          >add</button>

        }
      </div>

      <ProductListing products={products} />

    </div>
  )
}

export default Dashboard