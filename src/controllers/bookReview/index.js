const { Router: router } = require('express');

const { authenticate } = require('../../middleware');

const {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getBookReviewDrafts
} = require('./get');

const {
    createBookReview
} = require('./post');

const { updateBookReview } = require('./put');

const { deleteBookReview } = require('./delete');

module.exports = (models, { config }) => {

    const api = new router();

    api.get(
        '/getBookReview',
        getBookReview(models)
    );

    api.get('/getFilteredBookReviews', getFilteredBookReviews(models));

    api.get('/getRecentBookReviews', getRecentBookReviews(models));

    api.get('/getBookReviewDrafts', authenticate(models), getBookReviewDrafts(models));

    api.post(
        '/createBookReview',
        authenticate(models),
        createBookReview(models)
    );

    api.put('/updateBookReview', authenticate(models), updateBookReview(models));

    api.delete('/deleteBookReview', authenticate(models), deleteBookReview(models));

    return api;

};