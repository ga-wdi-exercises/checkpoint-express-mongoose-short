const express = require("express")
const router = express.Router()
const mongoose = require('..db/models/note')

const Notes = mongoose.model('Notes')

router.get("/", (req, res) => {
    Notes.find({}).then(notes => {
      res.render("index", { notes: notes })
    })

router.post('/', (req, res) => {
    Notes.create(req.body)
     .then(notes => {
       res.redirect('/notes')
   })
})

router.get('/new', (req, res) => {
    res.render('new')
  })
  
router.get('/authors/:id', (req, res) => {
    Notes.findById(req.params.id)
     .then(notes => {
        res.render('edit', { notes })
      })
  })

module.exports = router