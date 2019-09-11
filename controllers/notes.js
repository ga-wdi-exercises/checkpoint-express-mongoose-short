const Notes = require("../models/Note")

module.exports = {
    index:(req,res) => {
        //placeholder

        Note.find({}).then(note => {
            res.json(note);

        }), 
        show:(req, res) => {
            Note.findOne({id: req.params.id})
            .then(note => res.json(note))
        })
    }