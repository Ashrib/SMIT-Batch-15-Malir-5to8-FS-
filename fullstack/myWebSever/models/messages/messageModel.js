import mongoose from "mongoose";

let MessageSchema = new mongoose.Schema({
    text:{type: String, required: true},
    to: {type: mongoose.Types.ObjectId, required: true, ref:"User"},
    from: {type: mongoose.Types.ObjectId, required: true, ref:"User" },
    
},{
   timestamps: true 
});

const Message = mongoose.model("messages", MessageSchema);

export default Message;