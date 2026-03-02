import express from 'express'
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';


export const orderRouter = express.Router();

orderRouter.post("/place",placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userOrders",userOrders);
orderRouter.get("/list",listOrders);
orderRouter.put("/status",updateStatus);