import dotenv from 'dotenv';
import colors from 'colors';
import express from 'express';
import connectDB from './Database/connect.js';
import pitchRoutes from './Routes/pitches.js';
import connectDataBase from './Database/connect.js';
const temp=express();
temp.use(express.json());
dotenv.config();
connectDataBase();

temp.use('/pitches',pitchRoutes);

const p=8081;
const port=p || 8081;
const begin=async()=>{
    try {
        temp.listen(port,()=>console.log(`Server is running on post ${port}`.yellow.bold));
    } catch (error) {
       console.log(error); 
    }
};
begin();

