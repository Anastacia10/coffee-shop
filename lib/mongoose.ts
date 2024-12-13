import mongoose from "mongoose";
import { MONGO_DB_CONNECTION } from "constants/application";

export const connectMongooseToDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Mongoose already connected");
    return;
  }

  try {
    await mongoose.connect(MONGO_DB_CONNECTION);
    console.log("Mongoose Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export const closeMongooseConnection = async () => {
  try {
    await mongoose.disconnect();
    console.log("Mongoose connection closed");
  } catch (error) {
    console.error("Error while closing Mongoose connection:", error);
  }
};
