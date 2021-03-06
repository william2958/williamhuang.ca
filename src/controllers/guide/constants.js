const {GLOBAL_LIMIT_PER_PAGE} = require("../constants");

module.exports = {
	LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
	propertiesToProject: {
		created: 1,
		title: 1,
		contentPreview: 1,
		technology: 1,
		urlString: 1,

		iconURL: 1,
		previewImageURL: 1,
		isPublished: 1,
		publishDate: 1
	}
};
