import express from "express";
import User from "../models/users/userModel.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import "dotenv/config"
import multer from "multer";
import cloudinary from '../config/cloudinary.js'
import messages from "./messages.js";

const usersRoutes = express.Router();

const storage = multer.memoryStorage(); //RAM
const upload = multer({ storage }); /// middleware


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
        let { id } = req.params;
        let body = req.body;
        let reqUser = req.user
        console.log("id for update req: ", id)

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



usersRoutes.post('/profile-upload', upload.single('profilePic'), async(req, res) => {
    let reqUser = req.user
    let file = `data:image/png;base64,${req.file.buffer.toString('base64')}`
    console.log(file);
    console.log(reqUser)

    let cloudinaryResult = await cloudinary.uploader.upload(file,{folder: 'avatars', public_id:`${reqUser?._id}`})
    console.log(cloudinaryResult.secure_url)
    console.log(cloudinaryResult.public_id)

    if(!cloudinaryResult.secure_url){
        res.status(500).json({
            message: "cloudinary upload fail!",
        });
    }
    /// mongodb
    await User.findOneAndUpdate({
         _id: reqUser?._id
    },{
        photoUrl: cloudinaryResult?.secure_url,

        // photoUrl: {
        //     url: cloudinaryResult?.secure_url,
        //     publicId: cloudinaryResult.public_id
        // }
    }
)
    res.status(200).json({
        messages:'profile successfully uploaded'
    })
})

// how to delete media from cloudinary
usersRoutes.delete('/account-images:id',async(req,res)=>{
    let {id} = req.params;
    // delete post from mongodb
    await User.findByIdAndDelete(id);

    // image delete from cloudinary
    await cloudinary.uploader.destroy(public_id)

})



export default usersRoutes
