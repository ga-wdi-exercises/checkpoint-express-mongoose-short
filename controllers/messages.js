const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const hbs = require("hbs");

router.get("/", (req, res) => {
  Note.find({}).then(notes => {
    res.render("index", { notes });
  });
});

module.exports = router;
