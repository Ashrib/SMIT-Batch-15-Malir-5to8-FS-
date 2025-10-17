import express from 'express';
import path from 'path'
import userRouter from './routes/users.js'

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    console.log(req.ip)
    res.send('this api is working....')
})

app.use('/users',userRouter)

// app.use("/static", express.static(''))

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})