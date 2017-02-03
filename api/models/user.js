const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  tribeName: String,
  tribeId: String,
  tribeMembers: Array
});
