const Note = require("../models");

module.exports = {
  index: function(req, res) {
    Note.find({}).then(notes => res.json(notes));
  },

  show: function(req, res) {
    Note.findById(req.params.id).then(notes => res.json(notes));
  },

};