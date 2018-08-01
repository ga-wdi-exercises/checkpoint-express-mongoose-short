const Note = require('../models/Note')

module.exports = {
    index: function (req, res) {
      Note.find({})                         //find for notes
        .then((notes) => )                  //pass the notes we find
          res.status(200)
          res.render('index', { notes })
        })
    },
    new: function (req, res) {

    },
    create: function (req, res) {

    },
    show: function (req, res) {
      Note.findOne({_id: req.params.id})
      .then(note => {
        res.status(200)
        res,render('show', { note })
      })
    },
    update: function (req, res) {

    },
    destroy: function (req, res) {

    },
}
