const mongoose = require('mongoose');
const { schema } = require('./schema');

const Token = mongoose.model('Token', schema);
module.exports = { Token };
