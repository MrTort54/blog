const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = 3000;
const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json);

mongoose
    .connect(
        `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.f5xp95z.mongodb.net/`
    )
    .then(() => console.log('connected'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('work well');
});
