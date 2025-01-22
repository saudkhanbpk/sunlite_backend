import mongoose from "mongoose";

const ConnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected...");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed...");

  }
};

export default ConnectionDB;
