import mongoose from "mongoose"
const MONGODB_URI= process.env.MONGODB_URI


export async function connectDB() {
  try {
   mongoose.connect(MONGODB_URI)
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}


