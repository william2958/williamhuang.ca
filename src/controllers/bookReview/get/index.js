const {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews
} = require('./publicBookReviewMethods');

const {
    getBookReviewAdmin
} = require('./adminBookReviewMethods');

module.exports = {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getBookReviewAdmin
};
