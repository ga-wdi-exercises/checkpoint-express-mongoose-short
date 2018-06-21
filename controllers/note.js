const { Note } = require("../models/Note.js");

module.exports = {
  index: (req, res) => {
    //title and author of each note in list of 10
    Note.find({})
      .limit(10)
      .populate('title')
      .populate('author')
      .then(notes => {
        res.render("index.hbs", { notes })
      })
  }
  show: (req, res) => {
    //title, body, author of individual note based on ID
    Note.findOne({ _id: req.params.id })
      .populate('title')
      .populate('body')
      .populate('author')
      .then(notes => {
        res.render("show.hbs", { notes })
      })
  }
}
