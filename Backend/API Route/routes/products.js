import express from 'express'

 const productRoutes = express.Router();

productRoutes.get('/', (req,res)=>{
    res.send('getting all products')
})
productRoutes.post('/', (req,res)=>{
    res.send('posting  product')
})
productRoutes.delete('/', (req,res)=>{
    res.send('deleting product')
})

productRoutes.get('/:id', (req,res)=>{
    res.send('getting specific product')
})

export default productRoutes