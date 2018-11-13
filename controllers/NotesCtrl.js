const express = require("express");
const router = express.Router();
const Notes = require("../models/Note");

router.get("/", (req, res) => {
  res.redirect("/Notes");
});

router.get("Notes/show:id", (req, res) => {
  Notes.find().then(notes => {
    res.render("show", notes);
  });
});

module.exports = router;
