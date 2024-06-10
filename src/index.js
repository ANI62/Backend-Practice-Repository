require ('dotenv').config({path:'./env'})
import { connect } from "http2";
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
    

connectDB();














/*import express from "express";
const app=express();
const connectDB=(async ()=>{
   try{
    await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",()=>{
      console.error("Error is there ")
    })
    app.listen(process.env.PORT,()=>{
      console.log(`Server is running on port ${process.env.PORT}`);
    })
   }catch(error){
    console.error("Error hai bhai");
   }
})()
export default connectDB; */