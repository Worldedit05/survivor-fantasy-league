const mongoose = require('mongoose');

const SurvivorSchema = new mongoose.Schema({
  player:{
	type: String
  },
  image:{
	type: String
  },
  seasons:{
	type: String
  }
})


module.exports = mongoose.model('Survivor', SurvivorSchema);