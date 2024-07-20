import mongoose from "mongoose";

export const connectMongodb = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Mongodb connected Successfully..");
    })
    .catch((err) => {
      throw err;
    });
};
