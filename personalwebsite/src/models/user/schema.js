const mongoose = require('mongoose');
const { EMAIL } = require('../../utils/regexes');
const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
    validate: {
      validator: email => EMAIL.test(email),
      message: 'Field [email] wrong format.',
    },
  },
  profile: {
    firstName: {
      type: String,
      required: [true],
    },
    lastName: {
      type: String,
      required: [true],
    }
  },

  googleProvider: {
    type: {
      id: String,
      token: String,
    },
    select: false,
  },

  admin: {
    type: Number,
    default: 0,
  },

});

module.exports = { schema };
