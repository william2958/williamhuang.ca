const { User } = require('../models/user');
const { Token } = require("../models/token");
const { BookReview } = require('../models/bookReview');
const { Blog } = require('../models/blog');
const { Project } = require('../models/project');
const { MonthlyFive } = require('../models/monthlyFive');
const { Guide } = require('../models/guide');

const express = require('express');

const auth = require('../controllers/auth');
const core = require('../controllers/core');
const bookReview = require('../controllers/bookReview');
const project = require('../controllers/projects');

const models = {
    User,
    BookReview,
    Token,
    Blog,
    Project,
    MonthlyFive,
    Guide
};

const routersInit = config => {

    const router = express();

    router.use('/auth', auth(models, { ...config }));
    router.use('/core', core(models, { ...config }));
    router.use('/bookReview', bookReview(models, { ...config }));
    router.use('/project', project(models, { ...config }));

    return router;

};

module.exports = routersInit;
