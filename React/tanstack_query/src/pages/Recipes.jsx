
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery,keepPreviousData  } from '@tanstack/react-query'
import { Link } from 'react-router'

const Recipes = () => {

    /// using tanstack query , no more need for state varibles and useEffect, try/catch
    const [search, setSearch] = useState('')

    let fetchData = async () => {
        let data = await axios.get(search ? `https://dummyjson.com/recipes/search?q=${search}` : 'https://dummyjson.com/recipes');
        return data
    }

    const { data, isError, isLoading, isPending } = useQuery({
        queryKey: ['recipes', search],
        queryFn: () => fetchData(),
        placeholderData: keepPreviousData ,
        staleTime: 60 * 1000, // 1 minute
        retry: 3,
        retryDelay: 2000,
        // refetchOnWindowFocus: true,
    })

    console.log(isPending)
    console.log(data)
    if (isError) {
        return <h2>Error.....</h2>
    }

    

    return (

        <div>
            <div className='p-3'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='w-full outline-2 rounded p-3' type="text" placeholder='search a recipe' />
            </div>

            {isLoading?
            <h2>Loading.....</h2>:

            <div>
                {
                    data?.data?.recipes?.map((recipe) => (
                        <Link key={recipe?.id} to={`/recipe/${recipe?.id}`}>

                            <div key={recipe?.id} className='flex flex-col justify-center items-center p-2 border-2 my-2' >
                                <div>
                                    <img className='size-32' src={recipe.image} alt="" />
                                </div>
                                <p style={{ fontSize: '2em' }}>{recipe?.name}</p>
                            </div>
                        </Link>
                    ))
                }

            </div>
        }
        </div>


    )
}


export default Recipes