import express from 'express'
import multer from 'multer'
import { addProduct, productList, removeProduct } from '../controllers/productController.js';


export const productRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,res,cb)=>{
        return cb(null,`${Date.now()}${File.originalname}`)
    }
})

const upload = multer({storage:storage});

productRouter.post("/add",upload.single("image"),addProduct)
productRouter.get("/list",productList);
productRouter.post("/remove",removeProduct)