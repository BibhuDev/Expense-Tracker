import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app= express();

app.use(cors());
app.use(express.json());

const PORT= process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Database connected");
        app.listen(PORT, ()=>{
            console.log(`server is running at address https://localhost:${PORT}`);
        })
    })
    .catch(err=> console.log(err));