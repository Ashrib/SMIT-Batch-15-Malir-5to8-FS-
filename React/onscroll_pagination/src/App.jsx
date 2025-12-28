import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

function App() {
  const [productsLimit, setProductsLimit] = useState(10);
  const [offSetHeightValue, setOffSetHeightValue] = useState(0);
  const [skips, setSkips] = useState(0);
  const [totalProducts, setTotalProducts] = useState(null);
  const [products, setProducts] = useState([]);

  let fetchProducts = async () => {
    let products = await axios.get(`https://dummyjson.com/products?limit=${productsLimit}&skip=${skips}`);
    setProducts((prev) => [...prev, ...products.data.products]);
    return products?.data;
  }
  let { data, isLoading, isError } = useQuery({
    queryKey: ['products', skips],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  })

console.log(data, "------data--")
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        setSkips((prev) => prev+10);
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => document.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <>
      <div className='flex flex-col items-center'>
        {
          (products)? products?.map((item) => <div key={item?.id} className='border-2 p-3 flex flex-col '>
            <img src={item?.thumbnail} className='h-[300px] w-auto self-center' />
            <span>ID: {item?.id}</span>
            <span>{item?.title}</span>
            <span>{item?.description}</span>
          </div>)
          :null
        }
      </div>
    </>
  )
}

export default App
