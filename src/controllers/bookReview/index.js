const {uploadImage, multer} = require("../../middleware");
const {addBookImage} = require("./post");

const { Router: router } = require('express');

const { authenticate } = require('../../middleware');

const {
    getBookReview,
    getFilteredBookReviews,
    getRecentBookReviews,
    getBookReviewAdmin,
    getNumRecentBookReviews,
    getBookReviewFromString
} = require('./get');

const {
    createBookReview
} = require('./post');

const { updateBookReview } = require('./put');

const { deleteBookReview } = require('./delete');

module.exports = (models, { config }) => {

    const api = new router();

    api.get(
        '/getBookReviewFromString',
        getBookReviewFromString(models)
    );

    api.get(
        '/getBookReview',
        getBookReview(models)
    );

    api.get('/getFilteredBookReviews', getFilteredBookReviews(models));

    // Get a certain number of book reviews
    api.get('/getNumRecentBookReviews', getNumRecentBookReviews(models));
    // This is to get book reviews based on skipNum and category
    api.get('/getRecentBookReviews', getRecentBookReviews(models));

    api.get('/getBookReviewAdmin', authenticate, getBookReviewAdmin(models));

    api.post(
        '/createBookReview',
        authenticate,
        createBookReview(models)
    );

    api.post(
        '/uploadBookImage',
        authenticate,
        multer.single('file'),
        uploadImage(models, config),
        addBookImage
    );

    api.put('/updateBookReview', authenticate, updateBookReview(models));

    api.delete('/deleteBookReview', authenticate, deleteBookReview(models));

    return api;

};
