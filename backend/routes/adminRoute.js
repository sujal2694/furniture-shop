import express from 'express'
import { loginUser, registerUser } from '../controllers/adminController.js';

export const adminRouter = express.Router();

adminRouter.post("/login",loginUser);
adminRouter.post("/register",registerUser);