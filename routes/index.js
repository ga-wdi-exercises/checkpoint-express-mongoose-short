const express = require("express");
const router = express.Router();
const { Note } = require("../models/Note");

router.get("/", (req, res) => {
  res.redirect("/notes");
});

router.get("/notes", (req, res) => {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

module.exports = router;
