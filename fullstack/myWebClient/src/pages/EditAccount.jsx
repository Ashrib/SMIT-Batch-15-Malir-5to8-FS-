import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from '../context/authStore.js';
import Cookie from 'js-cookie';
import Navbar from '../components/Navbar.jsx';


const EditAccount = () => {
    const auth = useAuth((state) => state.user)
    let updateUser = useAuth((state) => state.updateUser);

    let token = Cookie.get('token');


    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required').min(3, 'First name must be at least 3 characters').matches(/^[A-Za-z]+$/, 'First name must contain only letters').lowercase(),
        lastName: yup.string().required('Last name is required').min(3, 'Last name must be at least 3 characters').matches(/^[A-Za-z]+$/, 'Last name must contain only letters').lowercase(),
        age: yup.number().required('Age is required').integer('Age must be an integer').positive('Age must be positive').max(90, 'Age must be less than or equal to 90'),
        email: yup.string().required('Email is required').email('Enter a valid email address'),
    });



    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: auth ? auth.firstName : '',
            lastName: auth ? auth.lastName : '',
            age: auth ? auth.age : '',
            email: auth ? auth.email : '',
        }
    });


    console.log("auth data in EditAccount:", auth);
    let fromSubmit = async (data) => {
        try {
            // console.log("auth id for update account:", auth._id);
            let response = await axios.put(`http://localhost:3000/users/updateAccount/${auth._id}`,
                { ...data },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        contentType: 'application/json',
                    },
                },
            );
            console.log("response from update account:", response.data)
            updateUser(response.data);

        } catch (error) {
            console.log("error in update account:", error);
        }
    }

    return (
        <>
      <Navbar />
        
        <div className='flex flex-col justify-center bg-gray-400 h-screen'>
            <div className='flex justify-center'>
                <span className='text-4xl'>Edit Account</span>
            </div>

            <div className='flex justify-center mt-10'>
                <form
                    onSubmit={handleSubmit(fromSubmit)}
                    className='flex flex-col gap-5 bg-white p-10 rounded-lg'>

                    <div>
                        <input type="text" placeholder='Last Name' className='border-2 border-gray-300 p-2 rounded-lg' {...register('lastName')} />
                        {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder='First Name' className='border-2 border-gray-300 p-2 rounded-lg' {...register('firstName')} />
                        {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                    </div>

                    <div>
                        <input type="number" placeholder='Age' className='border-2 border-gray-300 p-2 rounded-lg' {...register('age')} />
                        {errors.age && <p className='text-red-500'>{errors.age.message}</p>}
                    </div>
                    <div>
                        <input type="email" placeholder='Email' className='border-2 border-gray-300 p-2 rounded-lg' {...register('email')} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700'>Update Account</button>
                </form>
            </div>



        </div>
        </>
    )
}

export default EditAccount