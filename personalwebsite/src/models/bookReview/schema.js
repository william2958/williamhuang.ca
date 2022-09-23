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
	author: String,
	recommended: {
		type: Boolean,
		default: false
	},
	category: String,
	coverURL: String,
	urlString: {
		type: String,
		required: true,
		index: true
	},

	rating: {
		type: String,
	},

	contentPreview: {
		type: String
	},
	content: {
		type: String
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
