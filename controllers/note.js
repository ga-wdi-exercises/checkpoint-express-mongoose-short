const Note = require('../models/Note')

module.exports = {
  index: (req, res) => {
    Note.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .then(notes => {
        res.render('/index', { notes })
      })
  },
  show: (req, res) => {
    Note.findOne({ _id: req.params.id })
      .exec(function (err, tweet) {
        res.render('/show', note)
      })
  }
}
