const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/', function(req, res) {
    Note.find({}).then(notes => res.json(notes))
})

router.get('/:id', function(req, res) {
    Note.findById(req.params.id).then(note => res.json(note))
})

module.exports = router;