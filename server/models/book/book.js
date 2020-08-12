const mongoose = require('mongoose');
const {
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  owner: { type: ObjectId, ref: 'Library' }, // Works because library model will be stored in mongoose by the time this is queried
});

module.exports = mongoose.model('Book', BookSchema);
