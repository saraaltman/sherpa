const express = require('express');
const mountainRouter = express.Router();
const Mountain = require('../models/mountain.model');
const State = require('../models/state.model');

// Get By Rating
// todo: replace hard coded 5 with rating from req
mountainRouter.get('/', (req, res) => {
  Mountain.find({rating: 5}).then(
    mountains => {
      res.send(mountains);
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

// Get By State
// todo: replace hard coded NC with rating from req
mountainRouter.get('/', (req, res) => {
  Mountain.find({locationState: State.NC}).then(
    mountains => {
      res.send(mountains);
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

// todo: Get By Name search
mountainRouter.get('/', (req, res) => {
  Mountain.find({rating: 5}).then(
    mountains => {
      res.send(mountains);
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});


// todo: update once we get to the add mountain portion
mountainRouter.post("/", (req, res) => {
  var mountain = req.mountain;
  mountain.save()
    .then(item => {
      res.send('item saved to database');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

module.exports = mountainRouter;