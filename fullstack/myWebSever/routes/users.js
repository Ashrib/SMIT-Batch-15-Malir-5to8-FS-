import express from "express";
import User from "../models/users/userModel.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import "dotenv/config"

const usersRoutes = express.Router();

let authenticateUser = (req, res, next) => {
    try {
        let token = req?.headers?.authorization.split(" ")[1];

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

        req.user = decodedToken;
        next()
    } catch (error) {
        res.status(401).send({
            message: error.message || "invalid token call!"
        })
    }
}
 
// get a users
usersRoutes.get('/',authenticateUser, async (req, res) => {  //get mongodb users
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
usersRoutes.get('/:id',authenticateUser, async (req, res) => {  //get mongodb users
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

export default usersRoutes
