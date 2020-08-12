// const path = require('path');
const express = require('express');
const router = express.Router();
const Library = require('../models/library/library');

router.get('/:id?', (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  Library.find(query).exec((err, libraries) => {
    if (err) return errorHandler(res, err);
    return res.status(200).json(libraries);
  });
});

router.post('/', (req, res) => {
  const libraryData = req.body;
  console.log('libraryData', libraryData);
  const newLibrary = new Library(libraryData);
  newLibrary.save((err, library) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(library);
  });
});

router.put('/:id', (req, res) => {
  Library.updateOne({ _id: req.params.id }, req.body, function (err, result) {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
});

router.delete('/:id', (req, res) => {
  Library.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
});

module.exports = router;
