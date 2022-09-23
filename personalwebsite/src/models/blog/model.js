const mongoose = require('mongoose');
const { schema } = require('./schema');

const Blog = mongoose.model('Blog', schema);
module.exports = { Blog };
