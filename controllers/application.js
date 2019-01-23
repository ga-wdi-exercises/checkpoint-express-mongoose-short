const { Note } = require('../models/Note')

module.exports = {
  index: (req, res) => {
    Note.find({})
      .limit(10)
      .populate('author')
      .then(notes => {
        res.render('index', { notes })
      })
  }
}