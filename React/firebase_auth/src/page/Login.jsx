import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useRef } from 'react'
import { auth } from '../firebase/firebaseConfig'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router'

const Login = () => {
  const emailInput = useRef()
  const passInput = useRef()
  const {setUser} = useContext(AuthContext)
  const navigate = useNavigate()



  const loginHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, emailInput.current.value, passInput.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user);
          navigate('/dashboard')
          // ...
        })
    } catch (error) {
        console.error(error)
    }
  }



  return (
    <div>
      <span className='text-3xl'>Login</span>
      <div className='flex flex-col gap-2 p-2'>
        <input ref={emailInput} type='text' placeholder='Enter email' />
        <input ref={passInput} type='password' placeholder='Enter password' />
        <button onClick={() => loginHandler()}>login</button>

      </div>

    </div>
  )
}

export default Login