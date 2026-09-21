import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    availableStock:{
        type:Number,
        required:true
    }
});



export const Product = mongoose.model("Product",productSchema);

