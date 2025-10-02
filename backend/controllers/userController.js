import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// Login 
const loginUser = async (req,res) => {
    const{email,password} = req.body;
    try {
        const user= await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesn't exist"})
        }
        const isMatched = await bcrypt.compare(password,user.password)
        if(!isMatched){
            return res.json({success:false,message:"Password is incorrect"})
        }
        const token = createToken(user._id);
        return res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//Signup

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser  = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        //Checking already registered user or not
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success:false , message:"User already exists"})
        }

        //validation
        if(!validator.isEmail(email)){
            return res.json({success:false , message:"Enter valid email"})
        }
        if(password.length<8) {
            return res.json({success:false , message:"Password is not strong enough"})
        }

        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id)

        res.json({success:true,token})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}