import express from 'express'
import userRoutes from './routes/users.js'
const app = express()
const port = 3000

let isLogin = true

let basicMiddleware = (req, res, next) => {
    console.log('middleware call');
    next();
}

let authenticate = (req, res, next) => {
    if(isLogin){
        next();
    }
    res.send('you need to login')
}

app.use(express.json())  //application-level



app.get('/', basicMiddleware, (req, res) => {
    res.send('Hello World!')
})

app.get('/products',authenticate, (req,res)=>{
    res.send(['product1','product2'])
})

app.get('/todos',basicMiddleware,authenticate, (req,res)=>{
    res.send(['todo1','todo2'])
})


app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
