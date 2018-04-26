const mongoose = require('mongoose');
const Schema = mongoose.Schema; // this can be condensed down to const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema)
