const mongoose = require('mongoose');

const localDBName = 'fullstack-react-library';
const MONGODB_URI = `mongodb+srv://dbUser:L0WW00w972XAVjQq@cluster0.gneug.mongodb.net/${localDBName}?retryWrites=true&w=majority`;

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
