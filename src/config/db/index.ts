import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/railsr1');
    console.log("connect")
  } catch (error) {
    console.log(error);
  }
};
export const disconnect = async () => {
  try {
    mongoose.connection.close();
    console.log("disconnect");
  } catch (error) {
    console.log(error);
  }
}