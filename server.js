// to handle api requests
import 'dotenv/config'
import  express from 'express';
import  cors from 'cors';
import  notesRoutes from './routes/notesRoutes.js';
import  {connectDB} from "./lib/connectDb.js";
const   app = express();
       app.use(cors({
       'Access-Control-Allow-Origin': '*'

    }));

app.use(express.json());

app.use('/notes', notesRoutes);
// here we are choosing the port on which the backend is running , on which site it should listen to requests to 
const PORT = 5000;
app.get("/" ,()=>{
    return resizeBy.json({"message":"Welcome"})
})
app.listen(5000, () =>
    {   connectDB()
        console.log(`Server running on port ${PORT}`)
        
    });
