const { Router: router } = require('express');

const { authenticate } = require('../../middleware');

const { getAdmin } = require('./get');

const {
    adminSignIn,
    adminSignUp
} = require('./post');

module.exports = (models, { config }) => {

    const api = new router();

    api.get(
        '/getAdmin',
        authenticate(models),
        getAdmin(models)
    );

    api.post(
        '/adminSignIn',
        adminSignIn(models)
    );

    api.post(
        '/adminSignUp',
        adminSignUp(models)
    );

    return api;

};