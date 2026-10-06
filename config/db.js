import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("DB connected successfully");

    return connect;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default connectDB;