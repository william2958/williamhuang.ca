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

	title: String,
	contentPreview: String,
	eventDate: Date,
	keyInfo: {
		type: [String],
		default: []
	},

	urlString: {
		type: String,
		required: true,
		index: true
	},

	heroURL: String,

	content: {
		type: String
	},

	recap: {
		type: String
	},

	lastUpdated: {
		type: Date
	},
	isPublished: {
		type: Boolean,
		default: false
	},
	publishDate: {
		type: Date
	}

});

module.exports = { schema };
