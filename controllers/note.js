const Note = require("../models/Note");

module.exports = {
  index: function(req, res) {
    Note.find({}).then(notes => res.render("index", { notes }));
  },

  show: function(req, res) {
    Note.findById({_id: req.params.id}).then(note => {
      res.render("show", note);
    });
  }
};
