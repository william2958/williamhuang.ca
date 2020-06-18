const { Router: router } = require('express');
const passport = require('passport');

const { authenticate, generateAccessToken } = require('../../middleware');

const { getAdmin } = require('./get');
const signIn = require('./sign-in');

const {
    adminSignUp
} = require('./post');

module.exports = (models, { config }) => {

    const api = new router();

    api.get(
        '/getAdmin',
        authenticate,
        getAdmin(models)
    );

    api.post(
        '/adminSignIn',
        passport.authenticate('local', { session: false, scope: [] }),
        generateAccessToken,
        signIn
    );

    api.post(
        '/adminSignUp',
        adminSignUp(models),
        passport.authenticate('local', { session: false, scope: [] }),
        generateAccessToken,
        signIn,
    );

    return api;

};
