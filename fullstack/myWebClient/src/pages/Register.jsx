import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router'
import axios from 'axios'
import Toast from '../components/Toast.jsx'
import { useState } from 'react'


const Register = () => {

  const [error, setError] = useState(null);
  // define validation schema using yup
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").min(3, "First Name must be at least 3 characters")
      .matches(/^[A-Za-z]+$/, "First Name must contain only letters"),
    lastName: yup.string().required("Last Name is required").min(3, "Last Name must be at least 3 characters")
      .matches(/^[A-Za-z]+$/, "First Name must contain only letters"),
    age: yup.number().required("Age is required").positive("Age must be positive").integer("Age must be an integer")
      .max(90, "Age must be less than or equal to 90"),
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

  // form submit handler

  let registerFormSubmit = async (data) => {
    try {
      console.log(data);
      let response = await axios.post('http://localhost:3000/auth/register', data)
      console.log(response);
      setError(null); // Clear error on success
    } catch (error) {
      console.error(error);
      setError(error?.response?.data?.message || "An error occurred");
    }
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Toast error={error} />                        
      <h1>Register Page</h1>
      <div className='w-1/2 p-4 shadow-lg rounded-lg'>
        <form onSubmit={handleSubmit(registerFormSubmit)} className='flex flex-col gap-4 mt-4'>
          <div className='flex gap-2 '>
            <div className='w-1/2 flex flex-col'>
              <input type="text" placeholder='First Name' name="firstName" id="firstName" className='w-full border-2 border-gray-300 rounded-md p-2' {...register("firstName")} />
              {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
            </div>

            <div className='w-1/2 flex flex-col'>
              <input type="text" placeholder='Last Name' name="lastName" id="lastName" className='w-full border-2 border-gray-300 rounded-md p-2'  {...register("lastName")} />
              {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>
          </div>
          <input type="text" placeholder='enter your age' className='border-2 border-gray-300 rounded-md p-2'  {...register("age")} />
          {errors.age && <p className='text-red-500'>{errors.age.message}</p>}
          <input className='border-2 border-gray-300 rounded-md p-2' type="email" placeholder='Email'  {...register("email")} />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          <input className='border-2 border-gray-300 rounded-md p-2' type="password" placeholder='Password'  {...register("password")} />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600' type="submit">Register</button>
        </form>
        <div >
          <p className='mt-4'>Already have an account? <Link className='text-blue-500 hover:underline' to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register