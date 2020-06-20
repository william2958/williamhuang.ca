const mongoose = require('mongoose');
const { schema } = require('./schema');

const Project = mongoose.model('Project', schema);
module.exports = { Project };
