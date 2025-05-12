
import express from 'express';
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js';
//import connectDB from './db/connectDB.js';
import connectDB from './db/connectDB.js'
 
dotenv.config();

const app = express();
const PORT = process.env.PORT; 

app.use("/api/auth", authRoute);

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
    connectDB();
})


