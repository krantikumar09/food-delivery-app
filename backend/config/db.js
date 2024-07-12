import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/thekitchn")
    .then(() => console.log("Database Connected !"));
};
