const {GLOBAL_LIMIT_PER_PAGE} = require("../constants");

module.exports = {
    LIMIT_PER_PAGE: GLOBAL_LIMIT_PER_PAGE,
    propertiesToProject: {
        created: 1,
        title: 1,
        author: 1,
        category: 1,
        rating: 1,
        contentPreview: 1,
        isPublished: 1,
        publishDate: 1,
        coverURL: 1
    }
};
