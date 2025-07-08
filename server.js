// to handle api requests
import 'dotenv/config'
import  express from 'express';
import  cors from 'cors';
import  notesRoutes from './routes/notesRoutes.js';
import  {connectDB} from "./lib/connectDb.js";
const   app = express();
       app.use(cors({
        origin: '*' // Allows all origins
    }));
 app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
app.use(express.json());

app.use('/notes', notesRoutes);
// here we are choosing the port on which the backend is running , on which site it should listen to requests to 
const PORT = 5000;
app.listen(PORT, () =>
    {   connectDB()
        console.log(`Server running on port ${PORT}`)
        
    });
