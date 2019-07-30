const Note = require('../models/Note');

module.exports = {
    redirect: function (req, res) {
        res.redirect('/notes')
    },
    index: function (req, res) {
        Note.find({}).then(notes => res.json(notes));
    },
    getNoteById: function (req, res) {
        Note.findById({_id: req.params.id}).then(notes => res.json(notes));
    }
};