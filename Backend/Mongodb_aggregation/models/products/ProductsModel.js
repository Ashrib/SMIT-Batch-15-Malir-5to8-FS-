import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
    name:{type: String, required: true},
    price: {type: Number, required: true},
    des: {type: String, required: true},
    category: [{ type:String , required: true}],
    rating: {type: Number},
    inStock: {type: Boolean, required: true},
    uid: {type: mongoose.Types.ObjectId, required: true},
},{
   timestamps: true 
});

const Product = mongoose.model("products", ProductSchema);

export default Product;