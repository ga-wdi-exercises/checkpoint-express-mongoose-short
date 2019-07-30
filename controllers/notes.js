const Notes = require("../models/Note");

module.exports ={
    redirect: function(req,res) {
        res.redirect("/notes")
    },   
    index: function (req,res){
        Notes.find({}).then(note => {res.json(note)})
    },
    show: function (req,res){
        Notes.findById(req.params.id).then(note => res.json (note));
    },
};




