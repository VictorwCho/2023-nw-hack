require('dotenv').config({ path: '../.env' })
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(cors());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log('Server Listening on port 3000')
})