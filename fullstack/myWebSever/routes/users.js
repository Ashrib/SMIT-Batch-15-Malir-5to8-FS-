import express from "express";
import User from "../models/users/userModel.js";





const usersRoutes = express.Router();

// get a user
usersRoutes.get('/', async (req, res) => {  //get mongodb users
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


export default usersRoutes
