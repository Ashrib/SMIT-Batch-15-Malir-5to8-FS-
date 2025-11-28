import express from "express";
import User from "../models/users/userModel.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import Joi from 'joi';
import "dotenv/config"
import jwt from 'jsonwebtoken';

const authRoutes = express.Router();
// validation schema for register 
const registerSchema = Joi.object({
    firstName: Joi.string().required().min(3).pattern(/^[A-Za-z]+$/).messages({
        "string.base": "First name must be a string",
        "string.empty": "First name is required",
        "string.min": "First name must be at least 3 characters",
        "string.pattern.base": "First name must contain only letters",
        "any.required": "First name is required"
    }),
    lastName: Joi.string().required().min(3).pattern(/^[A-Za-z]+$/).messages({
        "string.base": "Last name must be a string",
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 3 characters",
        "string.pattern.base": "Last name must contain only letters",
        "any.required": "Last name is required"
    }),
    age: Joi.number().required().integer().positive().max(90).messages({
        "number.base": "Age must be a number",
        "number.integer": "Age must be an integer",
        "number.positive": "Age must be positive",
        "number.max": "Age must be less than or equal to 90",
        "any.required": "Age is required"
    }),
    email: Joi.string().required().email().messages({
        "string.email": "Enter a valid email address",
        "any.required": "Email is required"
    }),
    password: Joi.string().required().min(6).max(20).messages({
        "string.min": "Password must be at least 6 characters",
        "string.max": "Password must be at most 20 characters",
        "any.required": "Password is required"
    }),
})
// validation schema for login 

const loginSchema = Joi.object({
    email: Joi.string().required().email().messages({
        "string.email": "Enter a valid email address",
        "any.required": "Email is required"
    }),
    password: Joi.string().required().min(6).max(20).messages({
        "string.min": "Password must be at least 6 characters",
        "string.max": "Password must be at most 20 characters",
        "any.required": "Password is required"
    }),
})

// register the user
authRoutes.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, age, email, password } = req.body;

        let { error, value } = registerSchema.validate(req.body)
        if (error) { throw new Error(error.details[0].message) }

        let findUser = await User.findOne({ email })
        if (findUser) return res.status(409).send({ message: "user with this email already exist!" })

        const saltRounds = process.env.SALT_ROUND;
        let hashPassword = await bcrypt.hash(password, parseInt(saltRounds))

        // If your User model expects a single `name` field, map firstName+lastName
        const name = `${firstName} ${lastName}`.trim()
        let newAccount = new User({ name: name, firstName, lastName, age, email, password: hashPassword });
        await newAccount.save()

        let createdToken = jwt.sign({ name,firstName,lastName, age, email }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.send({
            message: 'account created',
            token: createdToken,
            data: { firstName, lastName, age, email }
        })

    } catch (error) {
        console.log(error)
        res.send({ message: 'error in creating account', error: error.message })
    }
})

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
            return res.status(404).send({
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
            lastName: findUser.lastName,
            firstName: findUser.firstName,
            age: findUser.age,
            email: email,
        }, process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.status(200).send({
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