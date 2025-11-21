import express from "express";
import User from "../models/users/userModel.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const authRoutes = express.Router();

// register the user
authRoutes.post('/register', async (req, res) => {
    try {
        const { name, age, email, password } = req.body;
        if (!name || !age || !email || !password) {
            return res.status(400).send({
                message: "Can't create accaount with invalid data!"
            })
        }


        let findUser = User.findOne({
            email: email,
        })

        if (findUser) {
            return res.status(409).send({
                message: "user with this email already exist!"
            })
        }

        const saltRounds = 10;
        let hashPassword = await bcrypt.hash(password, saltRounds) // encrypted password
        console.log(hashPassword)

        let newAccount = new User({ ...req.body, password: hashPassword });
        await newAccount.save()// account data store in db
        res.send({
            message: 'account created',
            data: newAccount,
        })
    } catch (error) {
        res.send({
            message: 'error in creating account',
            error: error,
        })
    }


})

// login the user
authRoutes.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                message: "Can't login accaount with invalid data!"
            })
        }

        let findUser = await User.findOne({
            email: email
        })

        if(!findUser){
            return res.send({
                message: "can not find this account!"
            })
        }
        console.log(findUser);

        let checkPassword = await bcrypt.compare(password, findUser.password)
        console.log(checkPassword)
        if(!checkPassword){
            return res.send({
                message: "invalid password!"
            })
        }
        res.send({
            message: 'successful login',
            data: findUser
        })
    } catch (error) {
        res.send({
            message: "failed to login! "
        })
    }
})




export default authRoutes