const {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getNumRecentBookReviews
} = require('./publicBookReviewMethods');

const {
    getBookReviewAdmin
} = require('./adminBookReviewMethods');

module.exports = {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getBookReviewAdmin,
    getNumRecentBookReviews
};
