import express from 'express'
import Product from '../models/products/ProductsModel.js';
import jwt from "jsonwebtoken"
import "dotenv/config"

const productRoutes = express.Router();


let authenticateUser = (req, res, next) => {
    try {
        let token = req?.headers?.authorization.split(" ")[1];

        if (!token) {
            return res.send({
                message: "token not provided!"
            })
        }

        let decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        if (decodedToken) {
            req.user = decodedToken
            next()
        }
    } catch (error) {
        res.send({
            message: "invalid token call!"
        })
    }
}


productRoutes.get('/', authenticateUser, async (req, res) => {
    try {
        console.log(req.user);

        let products = await Product.find();
        console.log(products)

        return res.json({
            data: products,
            message: 'fetched all products',
        })
    } catch (error) {
        console.log(error)
        res.json({
            data: null,
            message: 'error in fetching all products',
        })
    }
})



// productRoutes.post('/', async (req, res) => {
//     try {
//         let body = req.body;
//         // validate the body
//         let newProduct = new Product(body);

//         await newProduct.save()


//         return res.json({
//             data: newProduct,
//             message: 'product added successfully',
//         })
//     } catch (error) {
//         console.log(error)
//         res.json({
//             data: null,
//             message: 'error in adding product',
//         })
//     }
// })


// // filter
// productRoutes.get('/filter', async (req, res) => {
//     try {
//         let queries = req.query
//         console.log(queries)
//         // console.log(queries.price.split(','))
//         // let products = await Product.find({
//         // price: queries.price.split(',')
//         // });

//         // for getting selected fields only 
//         // let products = await Product.find({}).select(" name price");  // -category
//         // let products = await Product.find({}, "-rating -price");

//         let products = await Product.find({
//             // price: {$lt: 39, $gt:12}
//             // category: {$in:['sports', 'manual']},
//             // $or:[{category: {$size: 3}}, {category: {$size:1}}],

//             // updatedAt: { $gt: '2025-11-09T12:57:41.255+00:00' }
//             // des:{$regex:'ali', $options:'i'}  // 'i' is for case-insensitive
//         })
//         // .limit(3)
//         // .skip(20)
//         // .countDocuments();


//         //   59.99 , 79.99
//         return res.json({
//             data: products,
//             message: 'fetched all products',
//         })
//     } catch (error) {
//         console.log(error)
//         res.json({
//             data: null,
//             message: 'error in fetching all products',
//         })
//     }
// })


export default productRoutes;