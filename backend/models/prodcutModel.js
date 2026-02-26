import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:String, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
})

export const prodcutsModel = mongoose.models.model || mongoose.model("products",productSchema);