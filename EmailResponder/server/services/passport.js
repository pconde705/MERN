const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // because we just need the strategy module in this case
const keys = require('../config/keys.js');

passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken)
    }
  )
);