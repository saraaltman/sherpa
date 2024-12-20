const express = require("express");
const userRouter = express.Router();
const User = require(".././models/user.model.js");

userRouter.get("/", (req, res) => {
  res.send("Hello World, This is home router");
});

userRouter.post("/", async (req, res) => {
  // first make sure there is not already a user with that email
  const email = req.body.email;
  try {
    const response = await User.findOne({ email });
    if (response != null) {
      res.send(
        "If you've already signed up for Sherpa, please head to the Login Page"
      );
    } else {
      var user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      });
      const savedUser = await user.save();
      res.json(savedUser);
    }
  } catch (err) {
    res.status(500).send(`Error ${err}`);
  }
});

userRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await User.findByIdAndUpdate(id, req.body, {"new": true});
    res.json(response);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
})

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await User.findById(id);
    res.json(response);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const response = await User.findOne(req.body);
    if (response == null) {
      res
        .status(400)
        .send("We are unable to find a user with that username and password");
    } else {
      res.json(response);
    }
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

module.exports = userRouter;
