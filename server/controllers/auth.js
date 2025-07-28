// idhar registration or sign ka logic hoga
//how user registers and signs in 

import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const register= async(req,res)=>{
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({message: "Email already registered"});
        }

        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, passHash });
        await newUser.save();

        return res.status(201).json({message: "User registered successfully" });
    } catch (error) {
        console.log("message: ", error);
    }
}

export const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({message: "User not found "});
        }

        const isMatch= await bcrypt.compare(password, user.passHash);
        if(!isMatch){
            return res.status(400).json({message: "incorrect user name or password "});
        }

        const token= jwt.sign(
            { userId: User.id},
            process.env.JWT_SECRET,
            {expiresIn: '7d' }
        );

        res.status(201).json({
            message: "Login successful",
            token,
            user: {
                id: User._id,
                name: User.name,
                email: User.email
            }
        });
    } catch (error) {
        console.log("message: ", error);
    }
}
