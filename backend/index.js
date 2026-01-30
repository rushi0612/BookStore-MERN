import express from "express";
import {PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send('welcome to Mern Stack Backend');
});


mongoose
    .connect(MONGODB_URL)
    .then(()=>{
        console.log("App Connected to MongoDB Database");
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
});
 try {
    
 } catch (error) {
    console.log(error) 
 }
});