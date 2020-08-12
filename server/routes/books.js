// const path = require('path');
const express = require('express');
const router = express.Router();
const Book = require('../models/book/book');

// Getting
router.get('/:id?', (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  Book.find(query)
    .populate('owner')
    .exec((err, books) => {
      if (err) return errorHandler(res, err);
      return res.status(200).json(books);
    });
});

router.post('/', (req, res) => {
  const bookData = req.body;
  console.log('bookData', bookData);
  const newBook = new Book(bookData);
  newBook.save((err, book) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(book);
  });
});

router.put('/:id', (req, res) => {
  Book.updateOne({ _id: req.params.id }, req.body, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
});

router.delete('/:id', (req, res) => {
  Book.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
});

module.exports = router;
