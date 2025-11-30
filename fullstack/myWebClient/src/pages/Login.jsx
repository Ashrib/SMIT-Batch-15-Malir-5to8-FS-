import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import Toast from '../components/Toast'
import Cookie from 'js-cookie'
import useAuth from '../context/authStore.js'
import Navbar from '../components/Navbar.jsx'

const Login = () => {
  let [errorMessage, setErrorMessage] = useState("")
  let navigate = useNavigate()
  // define validation schema using yup
  const schema = yup.object().shape({
    email: yup.string().required("Email is required")
      .email("Enter a valid email address"),
    password: yup.string().required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });


  let updateUser = useAuth((state) => state.updateUser);
  // form submit handler
  let loginFormSubmit = async (data) => {
    try {
      let response = await axios.post('http://localhost:3000/auth/login', data)
      console.log(response.data.token);
      Cookie.set('token', response.data.token);
      updateUser(response.data.data)
      navigate('/');

    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);

    }
  }

  return (
    <>

      <Navbar />

      <div className='flex flex-col justify-center items-center h-screen'>
        <Toast error={errorMessage} />
        <span className='text-4xl'>Login</span>
        <div className='w-1/3 p-4 shadow-lg rounded-lg'>
          <form onSubmit={handleSubmit(loginFormSubmit)} className='flex flex-col gap-4 mt-4'>
            <input className='border-2 border-gray-300 rounded-md p-2' type="email" placeholder='Email' {...register("email")} />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            <input className='border-2 border-gray-300 rounded-md p-2' type="password" placeholder='Password' {...register("password")} />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600' type="submit">Login</button>
          </form>

          <div>
            <p className='mt-4'>Don't have an account? <Link className='text-blue-500 hover:underline' to="/register">Register</Link></p>
          </div>

        </div>


      </div>
      </>
  )
}

export default Login