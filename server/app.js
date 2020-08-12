require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware
require('./middleware')(app);

// Database Connect
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connecting to Database'));

app.use(express.json());

// Routes

const librariesRouter = require('./routes/libraries');
app.use('/local_library/libraries', librariesRouter);
const booksRouter = require('./routes/books');
app.use('/local_library/books', booksRouter);

module.exports = app;
