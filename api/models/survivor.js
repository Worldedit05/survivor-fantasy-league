const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const Survivor = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  img: String,
  weeklyPoints: Array,
  bio: String
});

module.exports = mongoose.model('survivor', Survivor);
