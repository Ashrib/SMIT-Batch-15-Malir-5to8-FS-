import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  let [products, setProducts] = useState([])
  let [cart, setCart] = useState([])
  let [loading, setLoading] = useState(true)


  let fetchProducts = async () => {
    try {
      let data = await fetch('https://dummyjson.com/products').then(res => res.json())
      console.log(data)
      setProducts(data.products)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  let addToCart = (id) => {
    console.log(id)
    let findProduct = products.find(item => item.id === id)//
    setCart([...cart, findProduct])
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      {loading ?
        <Loader/>
        :
        <>
          <div className='flex justify-center'>
            <span className='text-2xl'>Cart: {cart.length}</span>
          </div>

          <div className='flex flex-col gap-2 p-4 justify-center items-center '>
            {
              products.map((item) => (
                <div key={item.id} className='p-2 box-border border-2 w-[500px] flex flex-col items-center'>
                  <img src={item.thumbnail} alt={item.title} className='size-32' />
                  <span className='text-[2em]'>{item.title}</span>
                  <span className='text-2xl'>category: {item.category}</span>
                  <span >{item.description}</span>
                  <span className='text-red-400 '>Price: ${item.price}</span>
                  <button className='hover:bg-blue-500 btn border-2 rounded-sm p-3'
                    onClick={() => {
                      addToCart(item.id)
                    }}
                  >add to cart</button>
                </div>
              ))
            }
          </div>
        </>
      }


    </>
  )
}


function Loader  () {
  return(<div className="flex justify-center items-center h-40">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    <span className="ml-4 text-xl">Loading...</span>
  </div>)
}


export default App
