const router = require('express').Router()
const Notes = require('../models/Note.js')

router.get('/', (req, res) => {
  res.redirect('/notes')
})

router.get('/notes', (req, res) => {
  Notes.find({}).then(notes => {
    res.render('index', {notes})
  })
})

router.get('/notes/:id', (req, res) => {
  Notes.findById(req.params.id).then(note => {
    res.render('show', {note})
  })
})

module.exports = router