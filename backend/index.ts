import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const app = express();
const port = 8888;

app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.listen(port,() => {
    console.log(`App started at http://localhost:${port}`)
})

