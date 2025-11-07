import express from "express";
import User from "../models/userModel.js";
import mongoose from "mongoose";

const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {  //get mongodb users
    try {
        let queryObj = {}
        let queries = req.query;
        console.log(queries)

        //age , limit   
        if(queries.ageLt && queries.ageGt){
            queryObj = {
                ...queryObj,
                age: { $lt: queries.ageLt, $gt: queries.ageGt }
            }
        }
        
        if(queries.ageGt && !queries.ageLt){
            queryObj = {
                ...queryObj,
                age: { $gt: queries.ageGt }
            }
        }

        if(queries.ageLt && !queries.ageGt){
            queryObj = {
                ...queryObj,
                age: { $lt: queries.ageLt }
            }
        }
        // if(queries.limit){
        //     queryObj = {
        //         ...queryObj,
        //         limit: { $gt: 20 }
        //     }
        // }

        let users = await User.find({
            ...queryObj
        });
        res.json({
            message: "successfully get users. ",
            users: users,
        })

    } catch (error) {
        res.json({
            message: error.message,
            users: null,
        })
    }
});



userRoutes.get('/:id', async (req, res) => {  //get specific mongodb user with _id
    try {
        const { id } = req.params;
        let findUser = await User.findById(id);

        if (findUser) {
            return res.json({
                message: "successfully get a user. ",
                user: findUser,
            })
        }

        res.json({
            message: "no user exist with this id. ",
            user: null,
        })

    } catch (error) {
        res.json({
            message: error.message,
            users: null,
        })
    }
});


userRoutes.post('/', async (req, res) => { // create user in mongodb
    const { name, age, email } = req.body;
    if (!name || !age || !email) { // validate the body
        return res.status(400).json({
            message: 'invaild data for creating user!',
            code: 400,
        })
    }


    try {
        let newUser = new User(req.body);
        await newUser.save();

        res.json({
            message: 'successfully created this user',
            user: newUser,
            // code: 400,
        })
    } catch (error) {
        console.log(error)

        if (error.code == 11000) {
            return res.status(400).json({
                message: 'user with this email is already exist!',
                code: 400,
            })
        }


        res.status(500).json({
            message: 'error in creating user!',
            code: 500,
        })
    }

});


userRoutes.put('/:id', async (req, res) => { // update user in mongodb
    const { id } = req.params;
    const { name, age, email } = req.body;
    if (!req.body) { // validate the body
        return res.status(400).json({
            message: 'invaild data for creating user!',
            code: 400,
        })
    }


    try {
        let newUser = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });

        res.json({
            message: `successfully updated this user id ${id}`,
            user: newUser,
            // code: 400,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error in updating user!',
            code: 500,
        })
    }

});

userRoutes.delete('/:id', async (req, res) => {  //get specific mongodb user with _id
    try {
        const { id } = req.params;
        let findUser = await User.findById(new mongoose.Types.ObjectId(id));

        if (!findUser) {
            return res.json({
                message: " user doesn't exist with this id. ",
                user: findUser,
            })
        }

        await User.deleteOne({ _id: new mongoose.Types.ObjectId(id) }).then(() => {
            return res.json({
                message: "successfully deleted a user. ",
            })
        })

    } catch (error) {
        res.json({
            message: error.message,
            users: null,
        })
    }
});








export default userRoutes