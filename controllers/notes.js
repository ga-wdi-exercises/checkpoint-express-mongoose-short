const Note = require("../models/Note");

module.exports = {
    index: (req,res) => {
        Note.find({})
        .then(notes => res.json(notes));
    },
    show: (req,res) => {
        Note.findOne({title: req.params.title}).then(note => {
            res.json(note);
        })
    }
}