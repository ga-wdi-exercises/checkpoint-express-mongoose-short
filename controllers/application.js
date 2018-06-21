const { Note } = require("../models/Note.js");

module.exports = {
  index: (req, res) => {
    Note.find({})
      .then(notes => {
        res.render("app/index", { notes })
      })
  }
}
