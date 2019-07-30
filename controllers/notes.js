const Note = require("../models/Note")

module.exports = {
    index: function (req, res) {
        Note.find({})
            .then(note =>
                res.json(note)
            )
    },
    show: function (req, res) {
        Note.find({})
            .then(note =>
                res.json(note)
            )
    },
    showNote: function (req, res) {
        Note.findById({ _id: req.params.id })
            .then(note =>
                res.json(note)
            )
    }
}
