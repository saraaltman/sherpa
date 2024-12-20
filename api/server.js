require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');


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

//cors
app.use(cors({
    origin: 'http://localhost:5173'
}));

// routes
const userRouter = require('./routes/userRouter');
const mountainRouter = require('./routes/mountainRouter');
const reviewRouter = require('./routes/reviewRouter');
app.use('/user', userRouter);
app.use('/mountain', mountainRouter);
app.use('/reviews', reviewRouter);


app.listen(3000, () => console.log('Example app is listening on port 3000.'));

