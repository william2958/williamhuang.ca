const {GLOBAL_LIMIT_PER_PAGE} = require("../constants");

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		created: 1,
		title: 1,
		contentPreview: 1,
		month: 1,
		year: 1,
		heroURL: 1,
		previewImageURL: 1,
		isPublished: 1,
		urlString: 1,
		publishDate: 1
	}
};
