const Note = require('../models/Note')

module.exports = {
  index: (req, res) => {
    Note.find({})
      .then(notes => {
        res.render("index", {
          notes
        })
      })
  },
  show: (req, res) => {
    Note.findOne({
        _id: req.params.id
      })
      .exec(function (err, note) {
        res.render("show", {
          note
        })
      })
  }
}