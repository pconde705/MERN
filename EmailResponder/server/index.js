// import express from 'express'; This syntax will be used for frontend not server side node
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // because we just need the strategy module in this case

const app = express();

passport.use(new GoogleStrategy());

app.listen(5000);
