const Note = require("../models/Note");

module.exports = {
  index: (req, res) => {
      Note.find({})
        .then(data => {
          console.log("showing all notes")
          res.render("../views/index", { data });
        });
    },
  show: (req, res) => {
    Note.findOne({ _id: req.params.id })
    .then(data => {
      console.log("showing one note")
      res.render("../views/show", { data });
    })
  }
}