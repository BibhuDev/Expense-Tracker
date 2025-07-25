import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT= process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;
console.log("MONGO_URI from env:", MONGO_URI);

mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Database connected");
        app.listen(PORT, ()=>{
            console.log(`server is running at address https://localhost:${PORT}`);
        })
    })
    .catch(err=> console.log(err));