import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    productData:{type:Object,default:{}},
},{minimize:false});


export const adminModel = mongoose.models.admin || mongoose.model("admin",adminSchema);