const Note = require('../models/Note')

module.exports = {
  index: function (req, res) {
    // listing all notes
    res.render('index')
  },
  show: function (req, res) {
    Note.findOne({ _id: req.params.id })
      .populate('author')
      .exec(function (err, note) {
        Comment.populate(note.body, { path: 'author' }, function (
          body
        ) {
          note.body = body
          res.render('show', note)
        })
      })
  }
}
