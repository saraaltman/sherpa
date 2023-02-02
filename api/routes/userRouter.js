const express = require('express');
const userRouter = express.Router();
const User = require('.././models/user.model.js');

userRouter.get('/', (req, res) => {
  res.send('Hello World, This is home router');
});


userRouter.post("/", (req, res) => {
  var user = new User({firstname: 'Sara', lastname: 'Altman', email: 'saraaltman9@gmail.com', password: 'password'});
  user.save()
    .then(item => {
      res.send('item saved to database');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

module.exports = userRouter;