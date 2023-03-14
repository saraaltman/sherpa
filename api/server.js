require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database setup
mongoose.connect(
  process.env.MONGODB_URI, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

// routes
const userRouter = require('./routes/userRouter');
const mountainRouter = require('./routes/mountainRouter');
app.use('/user', userRouter);
app.use('/mountain', mountainRouter);


app.listen(3000, () => console.log('Example app is listening on port 3000.'));

