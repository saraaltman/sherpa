const express = require('express');
const mountainRouter = express.Router();
const Mountain = require('../models/mountain.model');
const State = require('../models/state.model');

// route for getting all mountains or filtering by rating or state
// route is /mountain?rating=5&state=NC
// both rating & state are optional
mountainRouter.get('/', (req, res) => {
  var rating = req.query.rating;
  var state = req.query.state;
  var query = {}

  if (rating != undefined) {
    query.rating = rating
  }
  if (state != undefined) {
    query.locationState = state
  }
  
  Mountain.find(query).then(
    mountains => {
      res.send(mountains);
    })
    .catch(err => {
      res.status(400).send('error finding mountains');
      console.log(err);
    });
});

// route for searching for mountains by name
// mountain & rating can also be added as query params here
// but the name is required
mountainRouter.get('/search/:name', (req, res) => {
  var name = req.params.name;
  var rating = req.query.rating;
  var state = req.query.state;
  var query = {}

  if (rating != undefined) {
    query.rating = rating
  }
  if (state != undefined) {
    query.locationState = state
  }
  query.name = { "$regex": name, $options: "i" };

  Mountain.find(query).then(
    mountains => {
      res.send(mountains);
    })
    .catch(err => {
      res.status(400).send('error finding mountains');
      console.log(err);
    });
});

// todo: update once we get to the add mountain portion
mountainRouter.post("/", (req, res) => {
  var mountain = new Mountain(
    {
      name: req.body.name,
      numLifts: req.body.numLifts,
      trails: req.body.trails,
      locationTown: req.body.locationTown,
      locationState: req.body.locationState,
      rating: req.body.rating
    });
  mountain.save()
    .then(item => {
      res.send(`Mountain ${item._id} saved to database`);
    })
    .catch(err => {
      res.status(400).send('unable to save mountain to database');
      console.log(err);
    });
});

module.exports = mountainRouter;