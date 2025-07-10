import mongoose from "mongoose"
const MONGODB_URI= process.env.MONGODB_URI


export async function connectDB() {
  try {
  await  mongoose.connect(MONGODB_URI)
   console.log("Connected to Database")
  } catch(error) {
    console.log("error while connecting to mongDb",error)
  }
}


