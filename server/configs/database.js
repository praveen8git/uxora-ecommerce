import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

//  MongoDB Connection
const connectDB = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB connected! with ${db.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed due to",error)
    }
}

export default connectDB;