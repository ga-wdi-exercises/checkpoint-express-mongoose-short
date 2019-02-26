const express = require('express')
const router = express.Router()
const { Note } = require('../models/Note')

router.get('/', function(req, res){
    Note.find({})
        .then(notes => {
            res.render('index', {notes})
        })
})

router.use('/note', require('./note.js'))

module.exports = router