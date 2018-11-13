const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", (req, res) => {
  res.redirect("/notes");
});

router.get("/notes", (req, res) => {
  Note.find().then(notes => {
    res.render("index", { notes: notes });
  });
});

router.get("/notes/:id", (req, res) => {
  Note.findOne({ _id: req.params.id }).then(note => {
    res.render("show", note);
  });
});

module.exports = router;
