const mongoose = require('../models/Note')
const router = require('express').Router()

const Note = mongoose.model('Note')

router.get('/', (req, res) => {
    Note.find({})
        .then( (notes) => {
            console.log(notes)
            res.render('index', { notes } )
        })
})

module.exports = router
