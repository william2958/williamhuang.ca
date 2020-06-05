const { Router: router } = require('express');

const {
    adminSignIn,
    adminSignUp
} = require('./post');

module.exports = (models, { config }) => {

    const api = new router();

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