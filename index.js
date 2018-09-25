const express = require('express')
const app = express()
const Note = require('./models/Note')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.redirect('/notes')
})

app.get('/notes', (req, res) => {
  Note.find({}).then(notes => {
    console.log(notes)
    res.render('index', { notes })
  })
})

app.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id).then(note => {
    res.render('show', { note })
  })
})

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
