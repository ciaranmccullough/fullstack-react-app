const path = require('path');
const express = require('express');
const router = express.Router();
const {
  getBooks,
  addBook,
  updateBook,
  removeBook,
} = require('../controllers/book.controller');

router
  .get('/:id?', getBooks)
  .post('/', addBook)
  .put('/:id', updateBook)
  .delete('/:id', removeBook);

module.exports = router;
