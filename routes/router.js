
const express = require("express");
const router = express.Router();

const Note = require("../db/models/Note");
const User = require("../db/models/User");

const controller = require("../controllers/notes.js");
const controller = require("../controllers/users.js");

router.get("/notes/:id", (req, res) => {
    Note.findOne({_id: req.params.id}).then(note => res.json(note));
});

router.get("/users", (req, res) => {
    User.find().then(allUsers => {
      res.json(allUsers);
    });
  });

router.get("/users/:id", (req, res) => {
    User.findOne({_id: req.params.id}).then(user => res.json(user));
}); 

module.exports = router;