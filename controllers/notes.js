const Notes = require("../models/Note")
module.exports = {
    index:(req,res) =>{
        Notes.find({}).then(note =>{
            res.json(note);
        });
    },
    notesList:(req,res) =>{
        Notes.find({}).then(note => {
            res.json(note);
        });
    },
    notesId:(req,res) =>{
        Notes.findOne({id: req.params.id}).then(note => res.json(note));
    },
}