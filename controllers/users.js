const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/users", (req,res) => {
    User.find({})
    .then(users => res.json(users))
})

router.get("/users/:_id", (req,res) => {
    User.findOne({ id: req.params._id})
    .then(users => res.json(users))
})

module.exports = router;