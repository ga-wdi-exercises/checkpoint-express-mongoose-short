const Note = require("../models/Note");

module.exports = {
  show: (req, res) => {
    Note.findOne({ _id: req.params.id }).then(note => {
      res.render("show", { note });
    });
  },
  index: (req, res) => {
    Note.find({})
      .limit(7)
      .then(note => {
        res.render("index", { note });
      });
  }
};
