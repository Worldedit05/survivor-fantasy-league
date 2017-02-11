const router = require('express').Router();

const User = require('../models/user');
const Survivor = require('../models/survivor');

router.get('/', (req, res) => {
  User.find({}, (err, results) => {
    res.json(results);
  });
});

router.get('/:username', (req, res) => {
  let userId = req.params.username.toLowerCase();
  User.find({
    username: userId
  }, (err, results) => {

    res.json(results);
  });

});

router.post('/', (req, res) => {
  let data = req.body;

  let newUser = new User(data);

  newUser.save((err, doc) => {
    if (err) {
      console.log(err);

      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

router.post('/addsurvivor', (req, res) => {

  let data = req.body;
  let lastSurvivorIndex = data.survivors.length - 1;

  User.findOneAndUpdate({_id: data.user_id}, {$push: {"survivors": data.survivor_id } }, { new: true}, (error, doc) => {
    if (error) {
      res.json(error);
    }else {
      res.json(doc);
    }
  });
});

module.exports = router;
