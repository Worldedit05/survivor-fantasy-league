const router = require('express').Router();

const User = require('../models/user');

router.get('/:username', (req, res) => {
  let userId = req.params.username.toLowerCase();

  User.find({
    username: username
  }, (err, results) => {
    console.log(res.json(results));
    res.json(results);
  });
});

module.exports = router;
