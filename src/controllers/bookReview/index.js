const { Router: router } = require('express');

const { authenticate } = require('../../middleware');

const {
    createBookReview
} = require('./post');

module.exports = (models, { config }) => {

    const api = new router();

    api.post(
        '/createBookReview',
        authenticate(models),
        createBookReview(models)
    );

    return api;

};