const express = require('express')
const router = express.Router()
const note = require('../controllers/note.js')

router.get('/notes', note.notes)
router.get('/notes/:id', note.show)

module.exports = router
