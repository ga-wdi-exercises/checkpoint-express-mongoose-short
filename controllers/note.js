const Note = require("../models/Note");

module.exports = {
  getNotes: function(req, res) {
    Note
    .find({})
    .then(notes => {
      res.render("index", { notes });
    });
  },
  getNoteByID: function(req, res) {
    Note.findByID(req.params.id).then(note => {
      res.render("/show", {note});
    });
  }
};
