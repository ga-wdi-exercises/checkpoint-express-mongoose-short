const express = require('express')
const router = express.Router()

const Note = require('../models/Note')

router.get('/', (req, res) => {
    Note.find({}).then(note => res.json(note))
})

router.get('/:id', (req, res) => {
    Note.findById(req.params.id).then(note => res.json(note))
})

module.exports = router;