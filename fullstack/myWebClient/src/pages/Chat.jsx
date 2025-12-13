import React, { use, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import useUsers from '../context/usersContext'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Cookie from "js-cookie"
import useAuth from '../context/authStore.js';
import { useQuery } from '@tanstack/react-query'

const Chat = () => {
    const messageSchema = yup.object({
        text: yup.string().required('Message text is required').min(1, 'Message text must be at least 1 character').max(500, 'Message text must be at most 500 characters'),
    });
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    console.log("selectedUser in Chat.jsx:", selectedUser);

    let { user } = useAuth()
    console.log("Auth", user)

    let token = Cookie.get('token');


    let filterSelectedUser = useUsers((state) => state.users.find((user) => user?._id === selectedUser));
    console.log("filterSelectedUser in Chat.jsx:", filterSelectedUser);

    const users = useUsers((state) => state.users);
    console.log("users in Chat.jsx:", users);



    const {
        handleSubmit, register,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(messageSchema),
        mode: 'onTouched',
    })


    let sendMessage = async (data) => {
        try {
            data = {
                ...data,
                to: filterSelectedUser._id,
                from: user?._id || user?.id
            }
            console.log("--------before send sendMessage data:", data);
            let response = await axios.post('http://localhost:3000/messages', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)

            setBtnDisabled(false);
        } catch (error) {
            console.log("error in sendMessage:", error);
        }
    }


    let fetchMessages = async () => {
        let response = await axios.get(`http://localhost:3000/messages?to=${selectedUser}&from=${user?._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    }


    const { data: messagesData, isLoading } = useQuery({
        queryKey: ['messages', selectedUser],
        queryFn: () => fetchMessages(),
        enabled: !!selectedUser && !!user._id
    })


    console.log("messages:", messagesData)

    useEffect(() => {
        (watch('text').length > 0) ? setBtnDisabled(false) : setBtnDisabled(true);

    }, [watch('text')]);


    return (
        <>
            <div className='pt-15 h-screen'>
                <Navbar />
                <div className='flex  items-center h-full '>
                    <div className='h-[100%] w-1/4 flex  flex-col items-center'>
                        <span className='text-2xl'>All Users</span>
                        <div className='user-container w-full h-full'>
                            {users.map((user) => {
                                return (
                                    <div
                                        onClick={() => setSelectedUser(user?._id)}
                                        key={user?._id} className={`user-card border-b-2 border-black p-2 hover:bg-gray-200 cursor-pointer ${(selectedUser == user?._id) ? 'bg-gray-300' : ''}`}>
                                        <span className='font-bold'>{user.name}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className='h-[100%] w-3/4 bg-orange-300 relative '>
                        <div className="messages-container h-full bg-gray-300">
                            {(!selectedUser) ?

                                <span>start chat</span>
                                :
                                    (messagesData?.length > 0)
                                        ?
                                        <div className='h-full bg-gray-300 flex flex-col'>
                                        {messagesData?.map((msg) => (
                                            <div className={`${msg?.to == (user?._id || user.id) ? 'self-start  bg-blue-200': 'self-end  bg-green-200'}
                                            p-2 rounded-md m-2 mx-6
                                            `}>
                                            {msg.text}
                                            
                                            </div>
                                        ))}
                                        </div>
                                        :
                                        <div className='flex justify-center items-center h-full'>
                                            <h2 className='text-center '>no message with this user</h2>
                                        </div>
                                    }
                            



                        </div>
                        <div className='absolute bottom-0 flex p-2 w-full bg-white'>
                            <form className='w-full flex' onSubmit={handleSubmit(sendMessage)}>
                                <input
                                    type="text"
                                    placeholder='Type your message...'
                                    className='w-full border-2 border-black p-2'
                                    {...register('text')}
                                />
                                <button
                                    disabled={btnDisabled ? true : false}
                                    onClick={() => console.log("click")}
                                    type='submit'
                                    className={`${btnDisabled ? 'bg-gray-400' : 'bg-blue-500'} text-white p-2 ml-2`}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Chat