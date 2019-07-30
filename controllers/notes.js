const Note = require("../models/Note");

module.exports = {
  index: function(req, res) {
    res.redirect("/notes");
  },
  index2: function(req, res) {
    Note.find({}).then(note => res.json(note));
  },
  show: function(req, res) {
    Note.findOne({ _id: req.params.id }).then(note => res.json(note));
  }
};
