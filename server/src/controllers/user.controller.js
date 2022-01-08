const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("/", async function (req, res) {
  let user;
  try {
    user = await User.findOne({ username: req.body.username });
   // console.log(req.body);
    if (user) {
      return res.send(user);
    }
    user = await User.create(req.body);
    return res.send(user);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
