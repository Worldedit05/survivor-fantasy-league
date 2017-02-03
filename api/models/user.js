const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {
    type: String,
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
  tribeName: String,
  tribeId: String,
  tribeMembers: Array
});

module.exports = mongoose.model('user', User);
