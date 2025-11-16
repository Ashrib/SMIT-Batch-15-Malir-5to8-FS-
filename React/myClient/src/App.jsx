import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useRef } from 'react'

function App() {

  let [products, setProducts] = useState([])
  let [searchInp, setSearchInp] = useState(null)
  let [isCategory, setIsCategory] = useState(false)
  let [url, setUrl] = useState('')

  let searchCategory = () => {
    if (searchInp) {
      setIsCategory(!isCategory)
    }
  }

  let fetchData = async () => {
    try {
      let data = await axios.get(`http://localhost:3000/products`);
      setProducts(data?.data?.data)
      console.log(data.data.data)

    } catch (error) {
      console.error(error)
    }
  }

  let fetchSearchData = async () => {
    try {
      let data = await axios.get(`http://localhost:3000/products?category=${searchInp}`);
      setProducts(data?.data?.data)
      console.log(data.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!searchInp && !isCategory) {
      fetchData().then(() => {
        console.log(products)
      })
      return
    }

    fetchSearchData().then(() => {
        console.log(products)
      })
  }, [isCategory])


  return (
    <>
      {products.length > 0 ?
        (
          <div>
            <div className="search-bar p-4 flex gap-3">
              <input type="text" className='outline-2 p-2'
                placeholder='search by category'
                value={searchInp}
                onChange={(e) => {
                  setSearchInp(e.target.value)
                  if(e.target.value.length<1) setIsCategory(false)
                }}
              />
              <button className='btn outline-2 p-2 '

                onClick={() => searchCategory()}

              >search</button>
            </div>


            <div className='flex flex-wrap justify-evenly'>
              {products?.map((product) => {
                return (
                  <div className='border-2 p-3 size-62 overflow-scroll'>
                    <h3>{product?.name}</h3>
                    <div className='flex flex-col'>
                      <span className='text-xs'>${product?.price}</span>
                      <span className='text-xs'>Description: {product?.des}</span>
                      <ul>
                        Category:
                        {product?.category?.map((cat) => <li className='text-[0.7em]'>{cat}</li>)}
                      </ul>

                    </div>
                  </div>
                )
              }


              )}
            </div>

          </div>

        )
        :
        <h2>no products</h2>
      }
    </>
  )
}

export default App
