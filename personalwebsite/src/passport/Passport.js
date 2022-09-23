const passportNPM = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const { User } = require('../models/user');
const { PassportStrategies } = require('./PassportStrategies');
const config = require('../../config');
const { config: configObject } = require('../../config');

/**
 * Provide passport authenticate logic
 *
 *  @example
 *         ./index.js
 *         app.use(passport.init())
 * **/

class Passport {
  constructor(config) {
    this._passport = passportNPM;
    this._strategies = new PassportStrategies(config, User);

    this._passport.use(
      new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        this._strategies.local,
      ),
    );

    // this._passport.use(
    //   new GoogleTokenStrategy(
    //     {
    //       clientID: configObject.passport.googleClientId,
    //       clientSecret: configObject.passport.googleClientSecret,
    //     },
    //     this._strategies.google,
    //   ),
    // );
  }

  init() {
    this._passport.serializeUser(User.serializeUser());
    this._passport.deserializeUser(User.deserializeUser());

    return this._passport.initialize();
  }
}

const passport = new Passport(config);

module.exports = { passport };
