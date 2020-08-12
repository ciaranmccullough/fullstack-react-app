const app = require('./app');

const PORT = 3000;
// NOTE: We do this for testing purposes, otherwise the server starts straight away
app.listen(PORT, function () {
  console.log(`Listening on Port ${PORT}`);
});
