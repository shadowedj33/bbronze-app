import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import serviceRoute from './routes/services.js';
import reviewRoute from './routes/reviews.js';
import clientInfoRoute from './routes/clientInfo.js';
import bookingRoute from './routes/bookings.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: true,
    credentials: true,
};


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
};

app.use(express.json());
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
    connect();
    console.log(`Server is running on port ${port}`);
});
