const express = require("express");
const router = express.Router();

const userSchema = require("../db/models/User");

// GET '/users' which will return a list of all users

router.get("notes/users", (req, res) => {
  userSchema.find().then(users => {
    res.json(users);
  });
});

// GET '/users/:someParameter which will return a
// single user by id. where :someParameter grabs a single user from the database by id.
// NOTE You can name :someParameter whatever you want

router.get("notes/users/:someParameter", (req, res) => {
  userSchema.findOneById({ _id: req.params.someParameter }).then(user => {
    res.json(user);
  });
});

module.exports = router;
