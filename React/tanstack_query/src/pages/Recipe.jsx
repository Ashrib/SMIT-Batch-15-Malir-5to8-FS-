
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'

const Recipe = () => {
    const { id } = useParams()


    let fetchRecipe = async () => {
        let data = await axios.get(`https://dummyjson.com/recipes/${id}`)
        return data?.data;
    }

    const { data, isLoading } = useQuery({
        queryKey: ['recipe'],
        queryFn: () => fetchRecipe(),
        enabled: !!id, // fetch only if id exist
    })

    // const {data:recipe } = data;
    console.log(data)

    if(isLoading){
        return <h2>Loading....</h2>
    }

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={data?.image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {data?.cuisine}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {data?.name}
                            </h1>
                            
                            <div>
                                <span className='text-2xl'>Instructions:</span>
                                <ul className='list-disc p-2'>

                                    {data?.instructions?.map((ins)=>(
                                        <li>{ins}</li>
                                    ))
}
                                </ul>
                            </div>
                            <div>
                                <span className='text-2xl'>Ingredients:</span>
                                <ul className='list-disc p-2'>

                                    {data?.ingredients?.map((ing)=>(
                                        <li>{ing}</li>
                                    ))
}
                                </ul>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Recipe