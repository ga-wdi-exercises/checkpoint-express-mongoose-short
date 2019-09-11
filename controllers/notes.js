const Note = require("../models/Note");

// basic export index the model
module.exports = {
  index: (req, res) => {
    Note.find({}).then(notes => {
      res.json(notes);
    });
  },
  showNotes: (req, res) => {
    Note.findOne({}).then(notes => res.json(notes));
  },
  emailNotes: (req, res) => {
    Person.findOne({ author: req.params.email }).then(notes =>
      res.json(notes))
  }
};