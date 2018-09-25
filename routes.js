const router = require('express').Router();
const Note = require('./models/Note.js')

router.get('/', (req, res) => {
  Note.find({}).then(note =>
    res.redirect(`/notes`))
})

router.get('/notes', (req, res) => {
  Note.find().then(note => res.render('index', {note}))
})

router.get('/notes/:id', (req, res) =>{
  Note.findById(req.params.id).then(note => res.render('show', note))
})

module.exports = router;
