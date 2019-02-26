const Note = require("../models/note");

module.exports = {
  show: function(req, res) {
    Note.findById(req.params.id).then(note => {
      res.render("show", { note });
    });
  }
};
