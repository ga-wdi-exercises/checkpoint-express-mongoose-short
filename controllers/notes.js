const express = require(express)
const router = express.Router()
const Note = require('../models/Note')

router.get('/', (req, res) => {
    Note.then(note => {
        res.json(note)
    })
})
router.get('/notes', (req, res) => {
    Note.find({}).then(note => {
        res.json(note)
    })
})
router.get('/notes/:id', (req, res) => {
    Note.find({ _id: req.params.id }).then(note => {
        res.json(note)
    })
})

module.exports = router