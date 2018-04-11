const mongoose = require('../models/Note')
const router = require('express').Router()

const Note = mongoose.model('Note')

router.get('/', (req, res) => {
    Note.find({})
      .then( (data) => console.log(data))
    res.render('index')
})

module.exports = router
