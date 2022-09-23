const mongoose = require('mongoose');
const { schema } = require('./schema');

const Guide = mongoose.model('Guide', schema);
module.exports = { Guide };
