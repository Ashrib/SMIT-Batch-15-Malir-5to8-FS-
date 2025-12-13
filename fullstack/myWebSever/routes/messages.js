import express from "express"
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import "dotenv/config"
import Message from "../models/messages/messageModel.js";
import User from "../models/users/userModel.js";


const messageRoutes = express.Router();



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

messageRoutes.use(authenticateUser); //router level


messageRoutes.get("/", async (req, res) => {
    try {
        let { to, from } = req.query;
    console.log("to: ", to)
    console.log("from: ", from)

    if (!to || !from) {
        return res.status(400).send({
            message: "invalid data!"
        })
    }

    let messageFilter = {
        $or: [
            { to: to, from: from },
            { to: from, from: to } // 'from' is the one who is logined and 'to' is the selected user
        ]
    }

    let messages = await Message.find(messageFilter).sort({ createdAt: 1 })


    res.status(200).json({
        message: "messages successfully fetched",
        data: messages,
    })
    } catch (error) {
        res.status(500).json({
            message: "error in fetching messages!",
        })
    }
})


messageRoutes.post("/", async (req, res) => {
    try {
        let { text, to, from } = req.body;
        if (!text || !to || !from) {
            return res.status(400).send({
                message: "invalid data!"
            })
        }

        let newMessage = new Message({ ...req.body });
        await newMessage.save();

        return res.status(200).json({
            message: "message successfully sent",
        })
    } catch (error) {
        res.status(500).json({
            message: "error in message sent!",
        })
    }


})




export default messageRoutes;