import express from "express"
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import "dotenv/config"


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


// messageRoutes.get("/",(req,res)=>{

// })


messageRoutes.post("/",(req,res)=>{
    
})




export default messageRoutes;