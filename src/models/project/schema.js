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

	category: String,
	techStack: [String],
	liveLink: String,
	spotlight: {
		type: Boolean,
		default: false
	},

	heroURL: String,
	previewImageURL: String,

	// DraftJS content saved as string json
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
