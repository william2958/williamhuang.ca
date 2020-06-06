const {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews
} = require('./publicBookReviewMethods');

const {
    getBookReviewDrafts
} = require('./adminBookReviewMethods');

module.exports = {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getBookReviewDrafts
};