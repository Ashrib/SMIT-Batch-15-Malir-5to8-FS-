import express from "express";
import User from "../models/users/userModel.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import "dotenv/config"

const usersRoutes = express.Router();

let authenticateUser = async (req, res, next) => {
    try {
        let token = req?.headers?.authorization.split(" ")[1];
        console.log(token)
        if (!token) {
            return res.status(401).send({
                message: "token not provided!"
            })
        }

        let decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodedToken) {
            return res.status(401).send({
                message: "invalid token!"
            })

        }

        let getUser = await User.findById(decodedToken?.id);
        req.user = getUser

        next()
    } catch (error) {
        res.status(401).send({
            message: error.message || "invalid token call!"
        })
    }
}

usersRoutes.use(authenticateUser); //router level

// get a users
usersRoutes.get('/', async (req, res) => {  //get mongodb users
    try {
        let user = req.user;
        let users = await User.find({
            email: { $ne: user.email },  // exclude the current user
        }).select('-password -__v'); // exclude password and __v fields


        res.status(200).json({
            message: "successfully get users.",
            users: users,
            total: users.length,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            users: null,
        })
    }
});

// get a user
usersRoutes.get('/:id', async (req, res) => {  //get mongodb users
    try {
        let user = req.user;
        let id = req.params.id;
        let userData = await User.findById(id).select('-password -__v'); // exclude password and __v fields

        console.log("userData:", userData);
        res.status(200).json({
            message: "successfully get user.",
            user: userData,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            users: null,
        })
    }
});

//update a user (my account)
usersRoutes.put('/updateAccount/:id', async (req, res) => {
    try {
        console.log("updateaccount body:", req.body)
        let {id} = req.params;
        let body = req.body;
        let reqUser = req.user
        console.log("id for update req: ",id)

        let userData = await User.findById(id || reqUser?._id).select('-password -__v -createdAt'); // exclude password and __v fields

        console.log("user before update", userData)
        if (!userData) {
            return res.status(404).json({
                message: "user not found!",
                code: 404,
            })
        }



        let updatedData = await User.findOneAndUpdate({
            _id: reqUser?._id
        }, {
            ...body
        })

        res.status(200).json({
            message: "user updated successfully",
            user: {
                id: updatedData?._id,
                name: updatedData?.name,
                firstName: updatedData?.firstName,
                lastName: updatedData?.lastName,
                age: updatedData?.age,
                email: updatedData?.email,
                isAdmin: updatedData?.isAdmin,
                photoUrl: updatedData?.photoUrl,

            }
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
})



export default usersRoutes
