'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const Register = () => {

    const registerSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        name: Yup.string().required('Name is required'),
        age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    })

    let handleRegister = async (data) => {
        // Registration logic here
        try {
            const response = await axios.post('/api/auth/register', {
                email: data.email,
                password: data.password,
                name: data.name,
                age: data.age,
            });
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration error:', error);
        }
    }

    return (
        <div>
            <h1>Register Page</h1>
            <div className='flex flex-col p-4'>
                <input className='border border-gray-300 rounded px-4 py-2' type="text" placeholder="Name" {...register('name')} />
                <input className='border border-gray-300 rounded px-4 py-2' type="number" placeholder="age" {...register('age')} />
                <input className='border border-gray-300 rounded px-4 py-2' type="text" placeholder="email" {...register('email')} />
                <input className='border border-gray-300 rounded px-4 py-2' type="password" placeholder="Password" {...register('password')} />
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={handleSubmit(handleRegister)}>Register</button>

            </div>
        </div>
    )
}

export default Register
