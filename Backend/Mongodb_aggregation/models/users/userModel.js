import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name:{type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
},{
   timestamps: true 
});

const User = mongoose.model("users", UserSchema);

export default User;