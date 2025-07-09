// to handle api requests
import 'dotenv/config'
import  express from 'express';
import  cors from 'cors';
import  notesRoutes from './routes/notesRoutes.js';
import  {connectDB} from "./lib/connectDb.js";
const   app = express();


app.use(express.json());
app.use(cors({
    origin:'https://react-notes-frontend-gamma.vercel.app/'
}))
app.use('/notes', notesRoutes);
// here we are choosing the port on which the backend is running , on which site it should listen to requests to 
const PORT = 5000;
app.get("/" ,()=>{
    return resizeBy.json({"message":"Welcome"})
})
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin':"*",
      'Access-Control-Allow-Methods': 'GET, POST,DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}
// export async function GET() {
//   return Response.json({ ok: true }, {
//     headers: { 'Access-Control-Allow-Origin': '*' },
//   });
// }
app.listen(5000, () =>
    {   connectDB()
        console.log(`Server running on port ${PORT}`)
        
    });
