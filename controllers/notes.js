const express = require("express")
const router = express.Router()

const Note = require("../models/Note")
const User = require("../models/User")


router.get('/', (req, res) => {
	res.redirect('/notes/')
})

router.get("/notes", (req, res) => {
    Notes.find({}).then(allnotes => res.json(allnotes))
})

router.get("/notes/:id", (req, res) => {
    Notes.find({ _id: req.params.id })
      .then(note => res.json(note))
  })


module.exports = router
