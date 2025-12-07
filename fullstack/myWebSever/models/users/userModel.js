import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name:{type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean,default:false},
    photoUrl: {type: String, default: null},
},{
   timestamps: true 
});

const User = mongoose.model("users", UserSchema);

export default User;