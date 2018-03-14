const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/:id", (req, res) => {
  Note.findOne({ _id: req.params.id }).then(note => {
    res.render("notes/show", note);
  });
});

module.exports = router;
