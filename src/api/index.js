const { User } = require('../models/user');
const { Token } = require("../models/token");
const { BookReview } = require('../models/bookReview');

const express = require('express');

const auth = require('../controllers/auth');
const bookReview = require('../controllers/bookReview');

const models = {
    User,
    BookReview,
    Token
};

const routersInit = config => {

    const router = express();

    router.use('/auth', auth(models, { ...config }));
    router.use('/bookReview', bookReview(models, { ...config }));

    return router;

};

module.exports = routersInit;
