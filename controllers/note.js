const Note = require("../models/Note")
module.exports = {
    index: function (req, res) {
        Note.find({})
        .then(notes) => {
            res.status(200)
            res.render('index', { notes })
        }
    },
    new: function (req, res) {
        // Note.find({})
        // .then(notes) =>
    }
}