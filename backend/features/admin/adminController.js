import jwt from 'jsonwebtoken'
import 'dotenv/config'
import bcrypt from 'bcrypt'
import validator from 'validator'
import { adminModel } from './adminModel.js'


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

export const registerUser = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        //for check existance of user
        const exists = await adminModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "user already have an account" })
        }

        //for validating user email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email address" })
        }

        //for validing password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please make strong password atleast 8 digit" })
        }

        //register user in database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new adminModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const admin = await newAdmin.save();
        const token = createToken(admin._id);
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "error" });
    }
}


export const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const admin = await adminModel.findOne({email})

        if (!admin) {
            return res.json({success:false,message:"User doesn't exists"})
        }

        const isMatch = await bcrypt.compare(password,admin.password)

        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }
        
        const token = createToken(admin._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}