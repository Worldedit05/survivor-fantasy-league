const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.Promise = require('bluebird');

const User = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  firstName: {
    type: String,
    required: "First name is Required"
  },
  lastName: {
    type: String,
    required: "Last name is Required"
  },
  tribeName: String,
  tribeId: String,
  tribeMembers: Array,
  draftPosition: Number,
  score: Number
});

User.plugin(uniqueValidator);

module.exports = mongoose.model('user', User);
