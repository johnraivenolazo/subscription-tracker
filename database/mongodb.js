import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error("Please provide a valid database URI")
}


const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log("DB connected in", NODE_ENV)
    } catch (error) {
        console.log("DB connection error", error)
    }
}

export default connectToDatabase