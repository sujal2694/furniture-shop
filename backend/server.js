import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './features/user/userRoute.js';
import { cartRouter } from './features/cart/cartRoutes.js';
import { productRouter } from './features/product/productRoute.js';
import { adminRouter } from './features/admin/adminRoute.js';
import { orderRouter } from './features/order/orderRoute.js';


const app = express();
app.use(express.json());
app.use(cors());

//database connection
connectDB();

//api endpoints
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);
app.use("/images",express.static('uploads'));
app.use("/api/product",productRouter);
app.use("/api/admin",adminRouter);
app.use("/api/order",orderRouter);


app.get('/',(req,res)=>{
    res.send("server is live....")
})

const port = process.env.PORT || 4000
app.listen(port, (req,res)=>{
    console.log(`server is running on http://localhost:${port}`);
})