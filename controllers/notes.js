const express = require("express");
const router = express.Router();

const noteSchema = require("../db/models/Note");

// GET '/notes' which return a list of notes

router.get("/notes", (req, res) => {
  noteSchema.find({}).then(notes => {
    res.json(notes);
  });
});

// GET '/notes/:someParameter' where :someParameter
// grabs a single Note from the database by id.
// NOTE You can name :someParameter whatever you want

router.get("/notes/:someParameter", (req, res) => {
  noteSchema.findById({ _id: req.params.someParameter }).then(notes => {
    res.json(notes);
  });
});

module.exports = router;
