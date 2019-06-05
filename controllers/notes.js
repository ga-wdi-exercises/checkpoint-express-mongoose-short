const express = require('express');
const Note = require('../models/Note.js');

const router = express.Router();

router.get('/', (req, res) => {
    Note.find({}).then(allNotes => res.json(allNotes));
});

router.get('/:id', (req, res) => {
    Note.findOne({ _id: req.params.id }).then(oneNote => oneNote);
});

module.exports = router;
