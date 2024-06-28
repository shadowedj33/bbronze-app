const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'jd90sdr34kr90vls0cvk4'

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('BBronze Test');
});
// zSSDlKwFdy0ppyrc
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
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err,token) => {
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

app.listen(3000);
