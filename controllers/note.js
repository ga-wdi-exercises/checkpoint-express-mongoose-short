const Note = require('../models/Note')

module.exports = {
    show: (req, res) => {
        Note.findOne({ _id: req.params.id })
        .populate("user")
        .then(note => {
            console.log(note)
            res.render("note/show", { note })
        })
    }
}