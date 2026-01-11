'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Login = () => {
    

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    })

    let handleLogin = async (data) => {
        // Login logic here
        try {
            const response = await axios.post('/api/auth/login', {
                email: data.email,
                password: data.password,
            });
            console.log('Login successful:', response.data);
            
        } catch (error) {
            console.error('Login error:', error);
        }
    }


    useEffect(() => {
         (async() => {
            //  const cookieStore = await cookies();
        //  const token = cookieStore.get('token');
            // console.log("Token on Login Page:", token);
        }
         )()
        
    },[])

  

    return (
        <div>
            <h1>Login Page</h1>
            <div className='flex flex-col p-4'>
                <input className='border border-gray-300 rounded px-4 py-2' type="text" placeholder="email" {...register('email')} />
                <input className='border border-gray-300 rounded px-4 py-2' type="password" placeholder="Password" {...register('password')} />
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={handleSubmit(handleLogin)}>Login</button>

            </div>
        </div>
    )
}

export default Login
