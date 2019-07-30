const Note = require("../models/Note")

module.exports = {
    index: function(req, res) {
        Note.find({}).then(notes => res.json(notes));
    },
    show: function(req, res) {
        Note.findById(req.params.id).then(note => res.json(note));
    }

};