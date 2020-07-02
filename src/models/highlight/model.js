const mongoose = require('mongoose');
const { schema } = require('./schema');

const Highlight = mongoose.model('Highlight', schema);
module.exports = { Highlight };
