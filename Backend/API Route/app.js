import express from 'express'
import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', userRoutes)
app.use('/products', productRoutes)

app.use((req, res) => {
  res.send('404!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
