const Note = require("../models/Note");

module.exports = {
  getNotes: function(req, res) {
    Note.find({}).then(notes => {
      res.render("index", { notes });
    });
  },
  getNoteByID: function(req, res) {
    Note.findOne({}).then(note => {
      res.render("show", { note });
    });
  }
};
