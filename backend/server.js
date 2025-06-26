
import express from 'express';
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js';
import connectDB from './db/connectDB.js'
 
dotenv.config();

const app = express();
const PORT = process.env.PORT; 

<<<<<<< HEAD
=======
app.use(express.json()); 

>>>>>>> 224a8e23ece0379af4389fa9e5b07f4196dd46f3
app.use("/api/auth", authRoute);

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
    connectDB();
})


