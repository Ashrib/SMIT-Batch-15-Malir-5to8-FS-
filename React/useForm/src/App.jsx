import './App.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRef, useState } from 'react'






function App() {
  const [pass2, setPass2] = useState('')

  const formSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'min eight characters, at least one letter, one number and one special character!'),
    gender: yup.string().required(),
    skills: yup.array().length(1,'select at least 1 skill'),
  })


  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  })



  let formSubmitHandler = (data) => {
    console.log(data)

  } 


 


  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)}
        className='flex flex-col p-8'
      >
        <div className='flex flex-col'>
          <input placeholder='email' type='text' {...register('email')} />
          {errors.email && <span className='text-[0.5em] text-red-700'>{errors.email.message}</span>}
        </div>

        <div className='flex flex-col'>
          <input  placeholder='password' type='password' {...register('password')} />
          {errors.password && <span className='text-[0.5em] text-red-700'>{errors.password.message}</span>}
        </div>

        <div className='flex flex-col'>
          <input onChange={(e)=>setPass2(e.target.value)} placeholder='confirm password' type='password' />
          {(watch('password') !== pass2)? <span className='text-[0.5em] text-red-700'>password doesn't match!</span>: null}
        </div>



        <div>
          Gender
          <div>
            <label htmlFor='male'>Male</label>
            <input defaultChecked id='male' type="radio" value={'male'} {...register('gender')} />
          </div>
          <div>
            <label htmlFor='female'>Female</label>
            <input id='female' type="radio" value={'female'} {...register('gender')} />
          </div>
          {errors.gender && <span className='text-[0.5em] text-red-700'>{errors.gender.message}</span>}
        </div>


        <div className='p-3'>
          <span>Skills:</span>
          <div>
            <label htmlFor='py'>python</label>
            <input id='py' type='checkbox' value={'python'} {...register('skills')}/>
          </div>
          <div>
            <label htmlFor='js'>Javascript</label>
            <input id='js' type='checkbox' value={'javascript'} {...register('skills')}/>
          </div>
          <div>
            <label htmlFor='c++'>C++</label>
            <input id='c++' type='checkbox' value={'c++'} {...register('skills')}/>
          </div>

          {errors.skills && <span className='text-[0.5em] text-red-700'>{errors.skills.message}</span>}
        </div>


        <input type="submit" />
      </form>
    </>
  )
}



export default App
