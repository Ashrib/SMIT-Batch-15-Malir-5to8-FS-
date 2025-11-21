import express from "express"
import "dotenv/config"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())


let db_url = process.env.MONGODB_URL;

app.use('/auth', authRoutes)

      
app.get('/',(req,res)=>{
    res.send('app is running')
})

mongoose.connect(db_url).then(()=>{
    console.log("mongodb successfully connected")
}).catch((error)=>{
    console.log("error in mongodb connection")
    console.error(error)
})

app.listen(3000, ()=>{
    console.log(`this server is listening at port ${3000}`)
})