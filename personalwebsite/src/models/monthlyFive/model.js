const mongoose = require('mongoose');
const { schema } = require('./schema');

const MonthlyFive = mongoose.model('MonthlyFive', schema);
module.exports = { MonthlyFive };
