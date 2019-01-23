const Note = require('../models/Note')

module.exports = {
    redirect: (req, res) => {
        res.redirect('/notes')
    },
    index: (req, res) => {
        Note.find({})
        .sort({ createdAt: -1 })
        .then(notes => {
            res.render('index', { notes })
        })
    },
    show: (req, res) => {
        Note.findOne({ _id: req.params.id })
        .then(note => {
            res.rener('show', { note })
        })
    },
}