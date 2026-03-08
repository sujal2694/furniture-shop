import express from "express"
import { loginUser, registerUser, getTokenForTestUser } from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/get-token", getTokenForTestUser)

export default userRouter;