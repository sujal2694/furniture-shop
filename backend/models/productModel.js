import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    discount: {type:String, required:true},
    description: {type:String, required:false},
    price: {type:String, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
})

export const productModel = mongoose.models.products || mongoose.model("products",productSchema);