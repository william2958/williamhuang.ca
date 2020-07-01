const {GLOBAL_LIMIT_PER_PAGE} = require("../constants");

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		title: 1,
		created: 1,
		contentPreview: 1,
		eventDate: 1,
		urlString: 1,

		heroURL: 1,
		isPublished: 1,
		publishDate: 1
	}
};
