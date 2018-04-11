const express = require('express')

const router = express.Router()

const Note = require('../models/Note')


router.get('/notes', (req, res) => {
  Note.find({}).then(notes => res.render('index', {notes}))
})

router.get('/notes', (req, res) => {
  Note.findOne({ title: })
})

module.exports = router
