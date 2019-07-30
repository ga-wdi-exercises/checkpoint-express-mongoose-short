const Notes = require("../../models");

module.exports ={
    index: function (req,res){
        Note.find({}).then(Note => res.json(Note))
    },
    index: function (req,res){
        Note.find({}).then(Note => res.json (Note));
    },
    show: function (req,res){
        Note.findById(req.params.id).then(Note => res.json (Note));
    }    
};




