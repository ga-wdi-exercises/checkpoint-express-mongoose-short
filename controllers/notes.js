const express = require('express')
const app = express();
const router = express.Router()

const Note = require('../models/Note.js')


// GET '/' which should redirect to `/notes'
router.get('/', (req, res) => {
    Note.find({}).then(allnotes => {
        res.json(allnotes)
    })
})

// GET '/notes' which return a list of notes
router.get('/', (req, res) => {
    Note.find({}).then(allnotes => {
        res.json(allnotes)
    })
})
// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id.
router.get('/notes/:id', (req, res) => {
    Note.findById({_id: req.params.id}).then(note => {
        res.json(note)
    })
})

module.exports = router