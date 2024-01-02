import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/userRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

const app=express();
dotenv.config()
const PORT =process.env.PORT ||8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/inventory/user',router)

app.use(errorHandler);
mongoose.connect(process.env.MONGODB_STRING).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running ${PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})