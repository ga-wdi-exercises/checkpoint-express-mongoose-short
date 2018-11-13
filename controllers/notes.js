const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", (req, res, next) => {
  res.redirect("/notes");
});

router.get("/notes", (req, res, next) => {
  Note.find({})
    .exec()
    .then(notes => {
      res.render("./show", { title: "Notes", notes: notes });
    });
});

router.get("/notes/:id", (req, res, next) => {
  Note.findById(req.params.id)
    .exec()
    .then(note => {
      res.render("./detail", { title: "Note Detail", note: note });
    });
});

module.exports = router;
