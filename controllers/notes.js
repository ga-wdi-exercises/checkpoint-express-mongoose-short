const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", (req,res) => {
    res.redirect("/notes")
})

router.get("/notes", (req,res) => {
    Note.find()
    .then(notes => res.json(notes))
})

router.get("/notes/:_id", (req,res) => {
    Note.findOne({ _id: req.params._id})
    .then(notes => {res.json(notes)})
})

module.exports = router;