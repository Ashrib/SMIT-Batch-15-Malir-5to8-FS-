import express from "express"
import "dotenv/config"
import mongoose from "mongoose";
import productRoutes from "./routes/products.js";


const app = express();
app.use(express.json())
let db_url = process.env.MONGODB_URL;


app.use('/products', productRoutes)

      
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