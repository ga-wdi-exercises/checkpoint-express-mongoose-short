const Note = require('../models/Note.js') 

module.exports = {
    index: (req,res) => {
        Note.find({}).then(results => {res.json(results)})
    },

    noteId: (req, res) => {
        let id = req.params.id
        Note.findOne({ _id: id }).then(results => {
          res.json(results);
        });
      }






}