// to handle api requests
import "dotenv/config";
import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./lib/connectDb.js";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path"
app.use(
  cors({
    origin: [
      "https://react-notes-frontend-gamma.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/notes", notesRoutes);
// here we are choosing the port on which the backend is running , on which site it should listen to requests to
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../React_Notes_Frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../React_Notes_Frontend", "dist", "index.html")
    );
  });
}
const PORT = 5000;
app.get("/", (req, res) => {
  return res.json({ message: "Welcome" });
});

app.listen(5000, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
