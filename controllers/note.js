const Note = require('../models/Note')

module.exports = {
  notes: (req, res) => {
    res.send('list of notes is working')
  },
  show: (req, res) => {
    console.log('Working')
  }
}
