const router = require('express').Router();

const User = require('../models/user');

router.get('/', (req, res) => {
  res.json("This should be all the users");
});

router.get('/:username', (req, res) => {
  let userId = req.params.username.toLowerCase();
  User.find({
    username: userId
  }, (err, results) => {
    // console.log(res.json(results));
    res.json(results);
  });

});

router.post('/', (req, res) => {
  let data = req.body;

  let newUser = new User(data);

  newUser.save(data, (err, doc) => {
    if (err) {
      console.log(err);

      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
