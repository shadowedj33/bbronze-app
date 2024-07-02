const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('BBronze Test');
});

app.post('/register', async (req,res) => {
    const {name, email, phone, password} = req.body;

    try {
        const userDoc = await User.create({
            name,
            email,
            phone,
            password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }
    
});

app.post('/login', async (req,res) => {
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
        const passCor = bcrypt.compareSync(password, userDoc.password)
        if (passCor) {
            jwt.sign({
                email:userDoc.email,
                id:userDoc._id,
                name:userDoc.name,
                phone:userDoc.phone,
            }, jwtSecret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token', token).json('login successful');
            });
        } else {
            res.status(422).json('invalid password');
        }
    } else {
        res.json('not found');
    }
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const {name,email,phone,_id} = await User.findById(userData.id);
            res.json({name,email,phone,_id});
        });
    } else {
        res.json(null);
    }
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
});

app.post('/reviews', (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {token} = req.cookies;
    const {
        rating,
        comment,
        reviewPhotos,
        serviceDate,
        service
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const reviewDoc = await Review.create({
            owner:userData.id,
            rating,
            comment,
            reviewPhotos,
            serviceDate,
            service,
        });
        res.json(reviewDoc);
    });
});

app.listen(3000);
