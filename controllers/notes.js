const Note = require("../models/Note")

module.exports = {
    index:(req,res) => {
        //placeholder

        Note.find({}).then(notes => {
            res.json(notes);

        });
    },

    show:(req, res) => {
            Note.findOne({id: req.params.id})
            .then(note => res.json(note))
        
    }
}