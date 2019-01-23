const Note = require("../models/Note")

module.exports = {
    index: (req, res) => {
        Note.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .populate("author")
        .then(notes => {
            res.render("index", notes)
        })
    },
    show: (req, res) => {
        res.render("index/new")
    },
}