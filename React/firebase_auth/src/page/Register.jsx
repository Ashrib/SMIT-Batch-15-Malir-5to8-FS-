import { AuthContext } from '../context/AuthContext.jsx'
import { createUserWithEmailAndPassword, auth } from '../firebase/firebaseConfig.js'
import React, { useContext, useRef } from 'react'



const Register = () => {
  const emailInput = useRef()
  const passInput = useRef()
  let {user, setUser} = useContext(AuthContext)




  let registerHandler = async() => {
    try {
      await createUserWithEmailAndPassword(auth, emailInput.current.value, passInput.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          setUser(user)
          // ...
        })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`error code: ${errorCode}. Message: ${errorMessage}`)
      
    }



  }






  return (
    <div>
      <span className='text-3xl'>Register</span>
      <div className='flex flex-col gap-2 p-2'>
        <input ref={emailInput} type='text' placeholder='Enter email' />
        <input ref={passInput} type='password' placeholder='Enter password' />
        <button onClick={() => registerHandler()}>register</button>
      </div>

    </div>
  )
}

export default Register