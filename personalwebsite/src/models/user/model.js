const { config } = require('../../../config');

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { schema } = require('./schema');

schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

schema.statics.upsertGoogleUser = function(
  accessToken,
  refreshToken,
  profile,
  cb,
) {
  const that = this;
  // try {
  //   const user = await this.findOne({ 'googleProvider.id': profile.id });
  //   if (!user) {
  //     const registeredUser = await this.findOne({
  //       email: profile.emails[0].value,
  //     });
  //     if (registeredUser) {
  //       return cb('User already has an account.', null);
  //     }
  //     const newUser = new that({
  //       profile: {
  //         firstName: profile.displayName.split(' ')[0],
  //         lastName: profile.displayName.split(' ')[1],
  //         profilePictureUrl: profile._json.picture,
  //       },
  //       email: profile.emails[0].value,
  //       googleProvider: {
  //         id: profile.id,
  //         token: accessToken,
  //       },
  //       restaurantOwner: {
  //         isOwner: true,
  //       },
  //       isVerified: profile._json.verified_email,
  //     });
  //
  //     const savedUser = await newUser.save();
  //
  //     return cb(null, savedUser);
  //   } else {
  //     return cb(null, user);
  //   }
  // } catch (err) {
  //   console.error('There was an error creating this use: ', err);
  //   return cb(err, null);
  // }
  return this.findOne(
    {
      'googleProvider.id': profile.id,
    },
    function(err, user) {
      // No user was found, lets create a new one
      if (!user) {
        // No google user was found, but we need to check if a user with this email has already
        // created an account
        that.findOne(
          {
            email: profile.emails[0].value,
          },
          function(err, user) {
            if (user) {
              return cb(
                { message: 'There already exists a user with this email' },
                null,
              );
            } else {
              var newUser = new that({
                profile: {
                  firstName: profile.displayName.split(' ')[0],
                  lastName: profile.displayName.split(' ')[1],
                  profilePictureUrl: profile._json.picture,
                },
                email: profile.emails[0].value,
                googleProvider: {
                  id: profile.id,
                  token: accessToken,
                },
                restaurantOwner: {
                  isOwner: true,
                },
                isVerified: profile._json.verified_email,
              });

              newUser.save(function(error, savedUser) {
                if (error) {
                  console.error('Error saving new google user: ', error);
                }
                // Add the user to our mailchimp
                // No need to wait for this to complete
                config.mailchimp.post(
                  `/lists/${config.mailchimpListId}/members`,
                  {
                    email_address: profile.emails[0].value,
                    status: 'subscribed',
                    merge_fields: {
                      FNAME: profile.displayName.split(' ')[0],
                      LNAME: profile.displayName.split(' ')[1],
                    },
                  },
                );
                return cb(error, savedUser);
              });
            }
          },
        );
      } else {
        return cb(err, user);
      }
    },
  );
};

const User = mongoose.model('User', schema);
module.exports = { User };
