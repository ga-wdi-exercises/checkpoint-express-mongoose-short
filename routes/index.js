const express = require("express");
const router = express.Router();
const Note = require("../models/note");
const noteController = require("../controllers/note");

router.get("/", function(req, res) {
  res.redirect("/notes");
});

router.get("/notes", function(req, res) {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

router.get("/notes/:id", noteController.show);

// router.get("/notes/:id", function(req, res) {
//   Note.findById(req.params.id).then(note => {
//     res.render("show", { note });
//   });
// });

module.exports = router;
