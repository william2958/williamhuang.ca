const mongoose = require('mongoose');
const { schema } = require('./schema');

const BookReview = mongoose.model('BookReview', schema);
module.exports = { BookReview };
