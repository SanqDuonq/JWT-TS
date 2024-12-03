import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './utils/connect-database';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.listen(port,() => {
    console.log(`App started at http://localhost:${port}`)
    connectDB();
})


