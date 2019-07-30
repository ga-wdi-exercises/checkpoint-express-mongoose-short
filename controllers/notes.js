const Note = require('../models/Note')

module.exports = {
    redirect: (req,res) => {
       res.redirect('/notes') 
    },
    
    index: (req,res) => {
        Note.find({}).then(notes => res.json(notes))

    },
    show: (req,res) => {
        Note.findById({_id: req.params.id}).then(notes => res.json(notes))
    }
}