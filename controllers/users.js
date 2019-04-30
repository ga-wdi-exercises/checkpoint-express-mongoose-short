const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find({}).then(allUsers => {
    res.json(allUsers);
  });
});

router.get("/:id", (req, res) => {
  User.find({ _id: req.params.id }).then(userId => {
    res.json(userId);
  });
});

module.exports = router;
