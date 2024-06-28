const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.get('/test', (req, res) => {
    res.json('BBronze Test');
});

app.post('/register', (req,res) => {
    const {name, email, phone, password} = req.body;
    res.json({name, email, phone, password});
});

app.listen(3000);