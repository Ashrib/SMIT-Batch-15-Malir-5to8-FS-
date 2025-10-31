import express  from 'express';
import mongoose  from 'mongoose';
import 'dotenv/config'


const app = express();
const port = 3000;

let db_url = process.env.MONGODB_URL;
console.log(db_url);

mongoose.connect(db_url).then(()=>{
    console.log("mongodb successfully connected")
}).catch((error)=>{
    console.log("error in mongodb connection")
    console.error(error)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
