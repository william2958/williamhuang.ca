const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { config } = require('../../config');

const authenticate = (req, res, next) => {
  console.log('request cookies: ', req.cookies);
  return expressJwt({
    secret: config.passport.secretAuthToken,
    getToken: req => req.cookies.token
  })(
    req,
    res,
    next,
  );
};

const generateAccessToken = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({
      message: 'User not authenticated',
    });
  }
  req.token = req.token || {};
  const token = jwt.sign(
    {
      id: req.user.id,
    },
    config.passport.secretAuthToken,
    {
      expiresIn: config.passport.tokenTime,
    },
  );

  req.token = token;
  res.cookie('token', token, { httpOnly: true });

  next();
};

module.exports = {
  authenticate,
  generateAccessToken,
};
