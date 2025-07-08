import mongoose from "mongoose"
const MONGO_URI= process.env.MONGO_URI


export async function connectDB() {
  try {
   mongoose.connect(MONGO_URI)
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}


