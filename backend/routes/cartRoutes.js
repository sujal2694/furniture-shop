import express from 'express'
import { addTocart, getCart, removeFromcart } from '../controllers/cartController.js'
import { authMiddleware } from '../middleware/auth.js';


export const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addTocart);
cartRouter.post("/remove", authMiddleware, removeFromcart);
cartRouter.post("/get",authMiddleware,getCart);
