const Note = require('../models/Note')

module.exports = {
    index: (req, res) => {
        Note.find({})
        .sort({ createdAt: -1 })
        .limit(7)
        .populate("user")
        .then(notes => {
            res.render("app/index", { notes })
        })
    }
}