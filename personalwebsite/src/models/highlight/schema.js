const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({

	owner: {
		type: ObjectId,
		ref: 'User',
		required: true
	},

	created: {
		type: Date,
		default: Date.now
	},

	dataType: {
		type: String,
		required: true
	},

	dataRef: {
		type: ObjectId,
		required: true
	}

});

module.exports = { schema };
