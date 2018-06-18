const Note = require('../models/Note')

module.exports = {
  notes: (req, res) => {
    Note.find({})
      .populate({
        path: 'notes',
        options: {sort: { createdAt: -1 }}
      })
      .then(note => { 
        res.render('index', { note })
      })
  },
  show: (req, res) => {
    console.log('Working')
  }
}
