const Note = require("../models/Note");

module.exports = {
  index: (req, res) => {
    Note.find({}).then(allnote => res.json(allnote));
  },
  getbyid: (req, res) => {
    Note.findById({ _id: req.params.id }).then(note => res.json(note));
  }
};
