const {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getNumRecentBookReviews,
    getBookReviewFromString
} = require('./publicBookReviewMethods');

const {
    getBookReviewAdmin
} = require('./adminBookReviewMethods');

module.exports = {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getBookReviewAdmin,
    getNumRecentBookReviews,
    getBookReviewFromString
};
