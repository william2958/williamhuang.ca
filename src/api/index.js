const { User } = require('../models/user');
const { Token } = require("../models/token");
const { BookReview } = require('../models/bookReview');
const { Blog } = require('../models/blog');
const { Project } = require('../models/project');
const { MonthlyFive } = require('../models/monthlyFive');
const { Guide } = require('../models/guide');
const { Event } = require('../models/event');

const express = require('express');

const auth = require('../controllers/auth');
const core = require('../controllers/core');
const bookReview = require('../controllers/bookReview');
const project = require('../controllers/projects');
const blog = require('../controllers/blog');
const guide = require('../controllers/guide');
const monthlyFive = require('../controllers/monthlyFive');
const event = require('../controllers/event');

const models = {
    User,
    BookReview,
    Token,
    Blog,
    Project,
    MonthlyFive,
    Guide,
    Event
};

const routersInit = config => {

    const router = express();

    router.use('/auth', auth(models, { ...config }));
    router.use('/core', core(models, { ...config }));
    router.use('/bookReview', bookReview(models, { ...config }));
    router.use('/project', project(models, { ...config }));
    router.use('/blog', blog(models, { ...config }));
    router.use('/guide', guide(models, { ...config }));
    router.use('/monthlyFive', monthlyFive(models, { ...config }));
    router.use('/event', event(models, { ...config }));

    return router;

};

module.exports = routersInit;
