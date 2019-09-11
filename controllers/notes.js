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
  showName: (req, res) => {
    Person.findOne({ author: req.params.username }).then(notes =>
      res.json(notes))
  }
};