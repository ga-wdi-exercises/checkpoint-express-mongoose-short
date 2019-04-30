const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes', (req, res) => {
    Note.find({})
    .then(allNotes => {
        res.json(allNotes);
    });
});

router.get('/notes/:id', (req,res) => {
    Note.findOne(req.body._id)
    .then(foundNote => {
        res.json(foundNote);
    });
});


module.exports = router;
