const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

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
app.post('/register', (req,res) => {
    const {name, email, phone, password} = req.body;
    res.json({name, email, phone, password});
});

app.listen(3000);