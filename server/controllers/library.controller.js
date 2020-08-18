const Library = require('../models/library/library.model');
const { errorHandler } = require('./utils');

exports.getLibraries = function (req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  Library.find(query).exec((err, libraries) => {
    if (err) return errorHandler(res, err);
    return res.status(200).json(libraries);
  });
};

exports.addLibrary = function (req, res) {
  const libraryData = req.body;
  console.log('libraryData', libraryData);
  const newLibrary = new Library(libraryData);
  newLibrary.save((err, library) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(library);
  });
};

exports.updateLibrary = function (req, res) {
  Library.updateOne({ _id: req.params.id }, req.body, function (err, result) {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
};

exports.removeLibrary = function (req, res) {
  Library.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
};
