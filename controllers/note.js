const Note = require("../models/Note");

module.exports = {
    index: (req, res) => {
        res.redirect('/notes');
    },
    list: (req, res) => {
        Note.find().then(note => {
            res.render('note/index', {note: note})
            res.status(200);
        })
    },
    show: (req, res) => {
        Note.findById(req.params.id).then(note => {
            res.render('note/index', {note: note} )
        })
    }

}