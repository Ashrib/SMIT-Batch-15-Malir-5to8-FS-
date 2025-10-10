import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import Navbar from './components/NavBar'
import HomeIcon from '@mui/icons-material/Home';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



function App() {
  const schema = yup
    .object({
      username: yup.string().required().min(6, 'username must be 6 chars'),
      email: yup.string().required().email('email is invaild!'),
    })
    .required()


  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email:'example@gmail.com'
    }
  })


  const formSubmit = (data) => {
    console.log(data)
    reset()
  }




  return (
    <Box>
      <Navbar />
      {/* <Box 
      sx={{
        marginTop:'20px',
        display:'flex',
        // flexDirection:'column',
        gap:'10px',
        flexWrap:'wrap'
      }}
    >
      {
        [1,2,3,4,5,6,7,8].map((item,i)=>{
          return(
            <Box key={item}
            sx={{
              height:'200px',
              width:{ xs:'100%',sm:'100%', md:'45%'},
              border: '1px solid black',
            }}
            >
              <Typography variant='h5'
              sx={{
                color:(theme) => theme.palette.primary.main,
                border: 'secondary.main'
              }}
              >Card <HomeIcon/></Typography>
            </Box>
          )
        })
      }


    
    </Box> */}


      <Box sx={
        {
          margin: '5px'
        }
      }>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                name="username"
                error={!!errors.username}
                helperText={errors.username?.message}
                label='username'
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                name="email"
                value={field.value ?? ""}
                error={!!errors.email}
                helperText={errors.email?.message}
                label='email'
              />
            )}
          />
          <Button type='submit'
          >Submit</Button>
        </form>
      </Box>
    </Box>
  )
}

export default App
