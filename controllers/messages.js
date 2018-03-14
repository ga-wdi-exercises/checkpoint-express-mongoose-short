const express = require('express')
const router = express.Router()

const Notes = require('../models/Notes')

router.get('/', (req, res) => {
  Notes.find({})
          .then(notes => {
            res.render('/index', {notes})
          })
})

router.get('/:id', (req, res) => {
  Notes.findOne({_id: req.params.id})
        .then(note => {
          res.render('notes/show', note)
        })
})

module.exports = router
