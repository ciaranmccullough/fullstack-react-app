const Book = require('../models/book/book.model');
const { errorHandler } = require('./utils');

exports.getBooks = function (req, res) {
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
};

exports.addBook = function (req, res) {
  const bookData = req.body;
  console.log('bookData', bookData);
  const newBook = new Book(bookData);
  newBook.save((err, book) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(book);
  });
};

exports.updateBook = function (req, res) {
  Book.updateOne({ _id: req.params.id }, req.body, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
};

exports.removeBook = function (req, res) {
  Book.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
};
