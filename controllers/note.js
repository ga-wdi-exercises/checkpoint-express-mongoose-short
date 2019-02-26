const Note = require("../models/Note");

module.exports = {
  create: function(req, res) {
    Note.create({
      title,
      author,
      body
    }).then(note => {
      res.redirect(`/note/${note._id}`);
    });
  },
  show: function(req, res) {
    Note.findById(req.params.id).then(note => {
      res.render("note/id", { note });
    });
  },

  delete: function(req, res) {
    Note.remove({ _id: req.params.id }).then(note => {
      console.log(note);
      res.redirect("/");
    });
  }
};
