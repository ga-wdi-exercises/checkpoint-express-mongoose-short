const express = require('express')
const notes = require('../controllers/notes')
const router = express.Router()




router.get('/',(req, res) => {
    res.redirect("/api/notes")
})
router.get('/notes/:id', notes.noteId)
router.get('/notes', notes.index)
