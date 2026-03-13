import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    discount: {type:Number, required:true},
    description: {type:String, required:false},
    price: {type:Number, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
})

export const productModel = mongoose.models.products || mongoose.model("products",productSchema);