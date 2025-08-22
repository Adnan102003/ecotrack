import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{dbName:"EcoTrack"});
    console.log("✅  MongoDB connected");
  } catch (err) {
    console.error("❌  Mongo error:", err.message);
    process.exit(1);
  }
};
