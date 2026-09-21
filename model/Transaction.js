import mongoose from "mongoose";


const transactionSchema =new mongoose.Schema({
    "productName":{
        type:String,
        required:true
    },
    "transactionType":{
        type:String,
        enum:["PURCHASE","RESTOCK"],        
    },
    "quantity":{
        type:Number,
        required:true
    },
    "transactionDateAndTime":{
        type:Date,
        default:Date.now()
    }
});


export const Transaction = mongoose.model("Transaction",transactionSchema);