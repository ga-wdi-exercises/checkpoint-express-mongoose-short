const Notes = require("../models/Note")

module.exports = {
    index: (req, res) => {
        Notes.find({}).then(note => {
            res.json(note)
        })
    },
    byId: (req, res) => {
        Notes.findById(req.params.id)
        .then(item => res.json(item))
    }
}