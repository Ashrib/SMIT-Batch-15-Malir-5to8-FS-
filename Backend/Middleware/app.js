import express from 'express'
import userRoutes from './routes/users.js'
import morgan from 'morgan'


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
app.use(express.urlencoded())  //application-level
app.use(express.text())  //application-level
app.use(morgan('short'));
// event-driven

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


// to show the form
app.get('/login', (req, res) => {
    res.send('<form method=POST action=/login><input type=text name=username><input type=number name=age><input type=submit></form>')
})

// submitting the form
app.post('/login', (req, res) => {
    console.log(`the form body : `, req.body)
    res.send('data has been recieved by the server')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
