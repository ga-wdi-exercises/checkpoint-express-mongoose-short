const router = require('express').Router()
const Note = require('../models/Note')

router.get('/', (req, res) => {
  Note.find({}).then(notes => {
    res.render('index', {notes})
  })
})

router.get('/:id', (req, res) => {
  Note.findById(req.params.id).then(note => {
    res.render('show', {note})
  })
})

module.exports = router
