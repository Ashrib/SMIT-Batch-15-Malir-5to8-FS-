import express from "express";
import User from "../models/users/userModel.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import Joi from 'joi';
import "dotenv/config"
import jwt from 'jsonwebtoken';

const authRoutes = express.Router();

const registerSchema = Joi.object({
    name: Joi.string().required().min(3),
    age: Joi.number().required().positive().min(18),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)),
})
const loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)),
})


// register the user
authRoutes.post('/register', async (req, res) => {
    try {
        const { name, age, email, password } = req.body;

        let { error, value } = registerSchema.validate(req.body)

        if (error) { // check body data
            throw new Error(error.details[0].message)
        }

        let findUser = await User.findOne({
            email: email,
        })

        if (findUser) {
            return res.status(409).send({
                message: "user with this email already exist!"
            })
        }
        const saltRounds = process.env.SALT_ROUND;
        let hashPassword = await bcrypt.hash(password, parseInt(saltRounds)) // encrypted password
        console.log(hashPassword)

        let newAccount = new User({ ...req.body, password: hashPassword });
        await newAccount.save()// account data store in db

        let createdToken = jwt.sign({
            name: name,
            age: age,
            email: email,

        }, process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        console.log(createdToken)

        res.send({
            message: 'account created',
            token: createdToken,
            data: {
                name: name,
                age: age,
                email: email,
            },
        })

    } catch (error) {
        console.log(error)
        res.send({
            message: 'error in creating account',
            error: error.message,
        })
    }


});

// login the user
authRoutes.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        let { error, value } = loginSchema.validate(req.body)
        if (error) { // check body data
            throw new Error(error.details[0].message)
        }

        let findUser = await User.findOne({
            email: email,
        })

        if (!findUser) {
            return res.send({
                message: "can not find this account!"
            })
        }

        let checkPassword = await bcrypt.compare(password, findUser.password)
        if (!checkPassword) {
            return res.send({
                message: "invalid password!"
            })
        }

           let createdToken = jwt.sign({
            name: findUser.name,
            age: findUser.age,
            email: email,
        }, process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.send({
            message: 'successful login',
            token: createdToken,
            data: {
                name: findUser.name,
                age: findUser.age,
                email: email,
            },
        })
    } catch (error) {
        res.send({
            message: "failed to login! "
        })
    }
})











export default authRoutes