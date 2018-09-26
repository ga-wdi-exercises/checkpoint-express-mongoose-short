const Note = require("../models/Note");

module.exports = {
  index: (req, res) => {
    res.redirect("/notes");
  },
  list: (req, res) => {
    Note.find().then(anyNote => {
      console.log(anyNote);
      res.render("index", { anyNote });
    });
  },
  show: (req, res) => {
      console.log(req.params.id)
    Note.findOne({ _id: req.params.id }).then(oneNote => {
      res.render("show", { oneNote });
    });
  }
};

// fork 
// set the remote