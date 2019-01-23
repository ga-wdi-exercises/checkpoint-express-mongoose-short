const { Note } = require("../models/Note");

module.exports = {
  index: (req, res) => {
    Note.find({})
      .populate("author")
      .then(notes => {
        res.render("app/index", { notes });
      });
  }
};
