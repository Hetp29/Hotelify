import express, { Request, Response } from 'express';
import cors from 'cors';
//import "dotenv/config";
import { config } from 'dotenv';
import mongoose from 'mongoose';
import mongodb from 'mongodb';

config();

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

mongoose.connect(process.env.MONGO_URL as string, connectOptions)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error('Mongo error:', err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'hello from api endpoint' });
});

const PORT = process.env.PORT || 7050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/*
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
*/