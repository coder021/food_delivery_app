import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DBpath = process.env.DBpath;

export const connectDB = async () => {
    await mongoose.connect(`${DBpath}`).then(()=>{
        console.log("DB connected");
    })
}