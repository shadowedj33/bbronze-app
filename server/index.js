import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import serviceRoute from './routes/services.js';
import reviewRoute from './routes/reviews.js';
import clientInfoRoute from './routes/clientInfo.js';
import bookingRoute from './routes/bookings.js';
import RateLimit from 'express-rate-limit';

const limiter = RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: true,
    credentials: true,
};
app.use(limiter);
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/services', serviceRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/clientinfo', clientInfoRoute);
app.use('/api/v1/booking', bookingRoute);

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
