import express from 'express'
import Product from '../models/products/ProductsModel.js';


const productRoutes = express.Router();


productRoutes.get('/', async (req, res) => {
    try {
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


productRoutes.post('/', async (req, res) => {
    try {
        let body = req.body;
        // validate the body
        let newProduct = new Product(body);

        await newProduct.save()


        return res.json({
            data: newProduct,
            message: 'product added successfully',
        })
    } catch (error) {
        console.log(error)
        res.json({
            data: null,
            message: 'error in adding product',
        })
    }
})


// filter
productRoutes.get('/filter', async (req, res) => {
    try {
        let products = await Product.aggregate([
            // {//stage 1
                // $match: { //query
                //      price: {$gt:72} ,
                //      rating: 5,
                //      // ......
                // }
            // },
            // {  // grouping the data
            //     $group:{
            //         _id:"$price",
            //         totalProduct: {$sum: 1},
            //     }
            // },
            // {  // to add the fields if needed
            //     $addFields:{
            //         // fullName: {$concat:['$name', " ", { $toString: "$price" }]}
            //         countCategory: {$size: "$category"},
            //         test: 'abc',
            //     }
            // },


            {
                // specify the required fields
             $project:   {  
                // _id: 1,
                // price:1,
                des: 0,
             }
            },

            // {
            //     $unwind: "$category"
            // }
            //stage 2
            //stage 3
        ]);  //






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


export default productRoutes;