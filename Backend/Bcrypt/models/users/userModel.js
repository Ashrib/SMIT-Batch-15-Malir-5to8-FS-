import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
    name:{type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
},{
   timestamps: true 
});

const User = mongoose.model("accounts", UserSchema);

export default User;