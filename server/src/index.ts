import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import mongodb from 'mongodb';
mongoose.connect(process.env.MONGO_URL as string)

const app = express(); //create express app
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/api/test", async (req, res)=> {
    res.json({ message: "hello from api endpoint"});
});
app.listen(7050, ()=>{
    console.log("server is running on port 7050");
})