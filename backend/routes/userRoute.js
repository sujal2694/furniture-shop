import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/auth.js';

export const userRouter = express.Router();

userRouter.post("/login", authMiddleware, loginUser);
userRouter.post('/register', registerUser);