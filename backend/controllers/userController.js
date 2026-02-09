import jwt from 'jsonwebtoken'
import 'dotenv/config'
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

export const registerUser = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        //for check existance of user
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "user already have an account" })
        }

        //for validating user email
        if (validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email address" })
        }

        //for validing password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please make strong password atleast 8 digit" })
        }

        //register user in database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "error" });
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message:"user doen't exists"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success:false, message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:false, token});
        
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"error"})
    }
}