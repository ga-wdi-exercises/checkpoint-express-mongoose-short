const express = require('express')
const router = express.Router()
const newLinks = require('../models/Note')

// list all in json(local) database = seeds.json
router.get('/', (req, res) => {
  newLinks.find({}).then(function (notes) {
    res.render('notes/index', { notes })
  })
})

// render new inventory form
router.get('/new', (req, res) => {
  res.render('notes/new')
})

// new post add to inventory and
router.post('/', (req, res) => {
  newLinks.create({
    author: req.body.author,
    title: req.body.title,
    body: req.body.body
  }).then(blogs => {
    res.redirect('/notes')
  })
    .catch(err => console.log('it\'s not adding the new inventory'))
})

// show detail
router.get('/:id', (req, res) => {
  newLinks.findOne({ _id: req.params.id })
    .then(notes => {
      res.render('notes/show', notes)
    })
    .catch(err => console.log('oh oh problem with showing details'))
})

module.exports = router
