const { Note } = require("../models/Note");

module.exports = {
    index: (req, res) => {
        Note.find({})
        .populate("author")
        .then (note => {
            res.render("../views/index", { note })
        })
    }
}
