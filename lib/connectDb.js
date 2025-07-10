import mongoose from "mongoose"
const MONGODB_URI= process.env.MONGODB_URI


export async function connectDB() {
  try {
 const conn= await  mongoose.connect(MONGODB_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch(error) {
     console.log(error)
        process.exit(1) // 1 means failure
  }
}


