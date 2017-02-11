const router = require('express').Router();

const Survivor = require('../models/survivor');

router.get('/', (req, res) => {
  Survivor.find({}, (err, results) => {
    res.json(results);
  });
});

router.post('/', (req, res) => {
  let data = req.body;

  let newSurvivor = new Survivor(data);

  newSurvivor.save((err, doc) => {
    if (err) {
      console.log(err);

      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
