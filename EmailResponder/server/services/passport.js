const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // because we just need the strategy module in this case
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleID: profile.id }).save();
    }
  )
);
