const express = require('express')
const router = express.Router()

const Note = require('../models/Note')

router.get('/notes', (req, res) => {
  Note.find({}).then(allNotes => {
    console.log(allNotes)
    res.json(allNotes)
  })
})
// // List a single Note/person by id
router.get('/notes/:id', (req, res) => {
  Note.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})
// // List a single Note/person by name

module.exports = router
