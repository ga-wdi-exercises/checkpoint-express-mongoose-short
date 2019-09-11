const express = require("express");
const router = express.Router();
const authorController = require("../routes/author.js");

router.get("/", function(req, res) {
  res.send("author - hello from GET");
});

router.get("/notes", function(req, res) {
    res.send("author - hello from GET");
});

router.get("/notes/:title", function(req, res) {
    res.send("author - hello from GET");
});


router.get("/users", function(req, res) {
    res.send("author - hello from GET");
  });

router.get("/users/:username", function(req, res) {
    res.send("author - hello from GET");
});

module.exports = router;