const mongoose = require('mongoose');

const promise = mongoose
  .connect(process.env.MONGODB_URI, {
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
