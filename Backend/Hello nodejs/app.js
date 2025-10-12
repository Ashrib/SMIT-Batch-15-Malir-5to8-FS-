import express from 'express'
const app = express()
const port = 3000

let users = [ 'usman','hamza','kaif']

app.get('/',(req, res)=>{
    console.log('this api hit')
// get data from db 
    res.send('get api is working')
})

app.get('/users', (req,res)=>{
    console.log('ip: ', req.ip)
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})
