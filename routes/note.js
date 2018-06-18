const express = require('express')
const router = express.Router()
const note = require('../controllers/note.js')

// render form to create new note
router.get('/new', note.new)
// create new note
router.post('/', note.create)
// show all notes
router.get('/notes', note.notes)

module.exports = router
