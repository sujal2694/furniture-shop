import { prodcutsModel } from "../models/prodcutModel.js";
import fs from 'fs'

//add product
export const addProduct = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const product = new prodcutsModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })

    try {
        await product.save();
        res.json({success:true,message:"Product added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

//product list
export const productList = async (req,res)=>{
    try {
        const products = await prodcutsModel.find({});
        res.json({success:true,data:products});
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"Error"})
    }
}


//remove products

export const removeProduct = async (req,res) => {
    try {
        const product = await prodcutsModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`,()=>{})
        await prodcutsModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product removed"})
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"error"})
    }
}