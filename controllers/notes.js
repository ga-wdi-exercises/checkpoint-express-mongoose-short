const Note = require('../models/Note');

module.exports = {
    index: function (req, res) {
        Note.find({}).then(notes => res.json(notes));
    },
    showNotes: function (req, res) {
        Note.find({notes}).then(notes => res.json(notes));
    },
    getNoteById: function (req, res) {
        Note.find({notes: req.params.id}).then(notes => res.json(notes));
    }
};