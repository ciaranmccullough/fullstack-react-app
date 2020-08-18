const path = require('path');
const express = require('express');
const router = express.Router();
const {
  getLibraries,
  addLibrary,
  updateLibrary,
  removeLibrary,
} = require('../controllers/library.controller.js');

router
  .get('/:id?', getLibraries)
  .post('/', addLibrary)
  .put('/:id', updateLibrary)
  .delete('/:id', removeLibrary);

module.exports = router;
