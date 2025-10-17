import express from 'express'

const userRouter = express.Router()


userRouter.get('/',(req,res)=>{
        res.send(['ali','usman'])

})


userRouter.get('/details',(req,res)=>{
        res.send('send details')

})


export default userRouter