import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/database.js";
import adminRouter from "./routes/adminRoute.js";
import customerRouter from "./routes/customerRoute.js";
import authRouter from "./routes/authRoute.js";
import "./utils/keepWarm.js";

const { PORT } = process.env;

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'https://uxora-ecommerce.vercel.app', 'https://uxora.praveensingh.in'],
    credentials: true
  }

// using middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/admin', adminRouter);
app.use('/api', customerRouter);
app.use('/auth', authRouter);

// Add the keep-warm route handler
app.get('/keep-warm', (req, res) => {
  res.send('Server kept warm');
 });
 
app.listen(PORT, () => {
    connectDB();
    console.log(`server listening at port ${PORT}`)
})