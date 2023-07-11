import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export default async function connectMongo() {
  if (mongoose.connections[0].readyState) return;
  await mongoose
    .connect(MONGO_URI!)
    .then(() => {
      console.log("connect to mongodb");
    })
    .catch((e) => {
      console.error(e);
    });
}
