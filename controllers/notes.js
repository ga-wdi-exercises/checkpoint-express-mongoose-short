const express = require('express')
const router = express.Router()
const Note = require('../models/Note')


router.get('/', (req,res) => {
  Note.find({}).then(notes => {
      res.render('notes/index', {notes})
  })
})

router.post('/', (req, res) => {
    Note.create({
        author: req.body.author,
        title: req.body.title,
        body: req.body.body
    }).then(() => {
        res.redirect('/notes')
    })
})

router.get("/new", (req, res) => {
    res.render("notes/new")
})


router.get('/edit/:id', (req, res) => {
    Note.findOne({_id: req.params.id}).then(notes => {
        res.render('notes/edit', note)
    })
})

router.put('/:id', (req, res) => {
    Note.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(
      note => {
        res.redirect('/notes')
      }
    )
})

router.get("/:id", (req, res) => {
  Note.findOne({ _id: req.params.id }).then(note => {
    res.render("notes/show", note)
  })
})


router.delete('/:id', (req, res) => {
    Note.findOneAndRemove({_id: req.params.id}).then(() => {
        res.redirect('/notes')
    })
})



module.exports = router
