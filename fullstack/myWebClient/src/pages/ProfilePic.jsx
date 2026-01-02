import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Cookie from 'js-cookie';

const ProfilePic = () => {
    let token = Cookie.get('token');
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const formData = new FormData();
            
            formData.append('profilePic', data.profilePic[0]);
            console.log(formData.get('profilePic'));

            await axios.post('http://localhost:3000/users/profile-upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

        } catch (error) {
            console.error("Error uploading profile picture:", error);
        }
    }


    return (
        <div className='flex bg-blue-100 h-screen'>

            <div>
                <form  className='flex flex-col p-4 gap-3' onSubmit={handleSubmit(onSubmit)}>
                    <input type="file" {...register('profilePic')} />
                    <input className='outline-2 p-2 bg-green-500' type="submit" value={'Upload'} />
                </form>
            </div>


        </div>
    )
}

export default ProfilePic