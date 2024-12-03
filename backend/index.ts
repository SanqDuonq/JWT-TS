import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './utils/connect-database';
import authRoutes from './routes/auth.route'
import errorMiddler from './middlewares/catch-error'
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/user',authRoutes)
app.use(errorMiddler.notFoundHandler)
app.use(errorMiddler.errorHandler)

app.listen(port,() => {
    console.log(`App started at http://localhost:${port}`)
    connectDB();
})


