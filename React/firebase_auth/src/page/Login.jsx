import React from 'react'

const Login = () => {
  return (
    <div>
      <span className='text-3xl'>Login</span>
      <div className='flex flex-col gap-2 p-2'>
        <input type='text' placeholder='Enter email'/>
        <input type='password' placeholder='Enter password'/>
        <button>login</button>

      </div>

    </div>
  )
}

export default Login