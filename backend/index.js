import express, { response } from "express";
import {PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(234).send('welcome to Mern Stack Backend');
});

app.use('/books', booksRoute);

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