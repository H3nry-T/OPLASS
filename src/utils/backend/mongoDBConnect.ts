import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.DATABASE!);
      console.log("db connected");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
