import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();

const Connection = async()=>{
  try{
   await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB")
  }
  catch(err){
    console.log(err)
  }
}
// app.use(cors({origin:['http://127.0.0.1:3000','http://localhost:3000']}));
app.use(cors({
    origin:['http://127.0.0.1:3000','http://localhost:3000'],
    credentials: true
}))
app.use(express.json())

app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/videos',videoRoutes)
app.use('/api/comments',commentRoutes)
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use((err,req,res,next)=>{
    const status = err.status || 500 ;
    const message = err.msg || "Wrong Credentials";
    return res.status(status).json(
        {
            success:false,
            status,
            message
        }
    );
});



app.listen(8800,()=>{
    Connection()
    console.log("app is listening on port 8800");
})

