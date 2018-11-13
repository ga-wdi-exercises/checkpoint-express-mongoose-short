const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Note = require("../models/Note");

router.get("/", (req, res) => {
  Note.find({}).then(notes => res.json(notes));
});

router.get("/notes", (req, res) => {
  Note.findOne({ name: req.params.name }).then(notes => res.json(notes));
});

module.exports = router;
