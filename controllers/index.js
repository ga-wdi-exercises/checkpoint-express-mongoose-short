const { Note } = require('../models/Note')

function mainPage (req, res) {
  Note.find({})
    .then(notes => {
      res.render('index', { notes })
    })
    .catch(err => console.log(err))
}

module.exports = {
  mainPage: mainPage
}
