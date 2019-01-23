const router = require('express').Router();
const Note = require('../models/Note.js');

router.get('/', (req, res) => {
    Note.find().then(notes => res.render('index', { notes }));
})

router.get('/notes', (req, res) => {
    res.render('')
})

router.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(notes => res.render('index',{ notes }))
    res.status(200)
})


module.exports = router