//jshint esversion:6
// app.js
const routes = require('./api/books');

const connectDB = require('./config/db');

const express = require('express');

const app = express();

// Connect Database
connectDB();

// app.use("/api/books", books);
app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
