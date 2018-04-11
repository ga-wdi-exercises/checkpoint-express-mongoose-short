const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

router.get('/', (req, res) => {
  Note.find({}).then(notes =>
    res.render('index', {notes}))
})
router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id', (req, res) => {
  Note.findOne({ _id: req.params.id })
    .then(note => res.render('show', { note }))
})

module.exports = router
