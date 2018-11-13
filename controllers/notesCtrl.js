const express = require("express");
const router = express.Router();
const Notes = require("../models/Note.js");


router.get("/", (req, res) => {
  res.redirect("/notes");
});

router.get("/notes", (req, res) => {
  Notes.find({})
    .sort({ createdAt: -1 })
    .then(notes => {
      res.render("index", { notes });
    });
});

router.get("/note/:id", (req, res) => {
  Notes.findOne({ _id: req.params.id }).then(note => {
    res.render("show", note);
  });
});


module.exports = router;