import React from 'react'
import Navbar from '../components/Navbar'
import Cookie from 'js-cookie'
import axios from 'axios'
import { use } from 'react'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import useAuth from '../context/authStore'

const UsersPage = () => {
    let token = Cookie.get('token');
    let auth = useAuth((state)=> state.user);
    

    let getUsers = async () => {
        let response = await axios.get('http://localhost:3000/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log("users data:", response.data);
        return response.data.users;
    }

    const { data, isError, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
    });

    console.log("data from useQuery in UsersPage:", data);



    return (

        <>
            <Navbar />



            <div className='mt-20'>


                {isError ?

                    <span>Error loading users.</span>

                    :
                    isLoading ?
                        <span>Loading users...</span>
                        :

                        <div>

                            {data?.map((user) => (
                                <div key={user._id} className='p-4 m-2 border border-gray-300 rounded-lg shadow-md'>

                                    <div className='mb-2'>
                                        <h2 className='text-xl font-semibold'>{user.firstName} {user.lastName}</h2>
                                        <p className='text-gray-600'>Age: {user.age}</p>
                                    </div>

                                    <div>
                                        {
                                            auth?.isAdmin &&
                                            <Link to={`/user/edit/${user._id}`} >

                                                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Edit</button>

                                            </Link>
                                        }

                                    </div>

                                </div>))}
                        </div>
                }
            </div>
        </>
    )
}

export default UsersPage