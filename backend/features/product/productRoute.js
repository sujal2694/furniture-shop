import express from 'express'
import multer from 'multer'
import { addProduct, productList, removeProduct } from './productController.js';


export const productRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage:storage});

productRouter.post("/add",upload.single("image"),addProduct)
productRouter.get("/list",productList);
productRouter.post("/remove",removeProduct)