const express = require('express');
const userRouter = express.Router();
const User = require('.././models/user.model.js');

userRouter.get('/', (req, res) => {
  res.send('Hello World, This is home router');
});


userRouter.post("/", (req, res) => {
  var user = new User(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });
  user.save()
    .then(item => {
      res.send(`User ${item._id} saved to database`);
    })
    .catch(err => {
      res.status(400).send('unable to save user to database');
      console.log(err);
    });
});

module.exports = userRouter;