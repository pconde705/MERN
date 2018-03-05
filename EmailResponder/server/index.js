// import express from 'express'; This syntax will be used for frontend not server side node
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // because we just need the strategy module in this case
const keys = require('./config/keys.js');


const app = express();

passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
