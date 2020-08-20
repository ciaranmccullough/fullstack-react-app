const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://${process.env.dbuser}:${process.env.dbpassword}@cluster0.gneug.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`;

const promise = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Googled
  })
  .then(function (db) {
    console.log('DATABASE CONNECTED!!', MONGODB_URI);
  })
  .catch(function (err) {
    console.log('CONNECTION ERROR', err);
  });
