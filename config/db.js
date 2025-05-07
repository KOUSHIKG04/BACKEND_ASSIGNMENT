import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting....");
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`"Error connecting to MongoDB": ${error.message}`);
  }
};
