import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { keepPreviousData,useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';

function App() {
  const [pageNum, setPageNum] = useState(1)
  const [skips, setSkips] = useState(0)
  const [search, setSearch] = useState(null);

  // Access the client
  const queryClient = useQueryClient();
  const PER_PAGE_LIMIT = 10;

  let fetchProducts = async () => {
    let products = await axios.get(search?`https://dummyjson.com/products/search?q=${search}&limit=${PER_PAGE_LIMIT}&skip=${skips}` : `https://dummyjson.com/products?limit=${PER_PAGE_LIMIT}&skip=${skips}`)
    return products.data;
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['products', skips,pageNum,search],
    queryFn: fetchProducts,
    enabled: !!pageNum , // fetch only when these exist
    placeholderData: keepPreviousData,
  })
  console.log(data)


  return (
    <>
      <div className='h-screen '>
        <div className='p-2'>
          <input
          // value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className='p-3 w-80  outline-3' type="text" placeholder='search product'/>
        </div>
        <div className='h-3/4  overflow-scroll'>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 ">
                {
                  data ?
                    data?.products?.map((item) => <div key={item?.id}  className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={item?.thumbnail}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {item?.title  }
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {item?.description}
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                              </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                              </svg>
                              1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>)
                    :
                    <h2>no products</h2>

                }


              </div>
            </div>
          </section>

        </div>
        <div className='h-1/4  flex justify-center items-center'>
          <Pagination
            count={data? Math.ceil(data?.total / PER_PAGE_LIMIT) : 1}
            onChange={(e, page) => {
              setPageNum(page);
              setSkips((page - 1) * PER_PAGE_LIMIT);
            }}

          />
        </div>

      </div>
    </>
  )
}

export default App
