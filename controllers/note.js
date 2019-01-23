const  {Note} = require('../models/Note')

module.exports = {
  new: (req,res) => {
    res.redirect(`/notes`)
  },
  show: (req,res) => {
    if(req.params.id) {
      Note.findOne({_id: req.params.id}).then ( note => {
        res.redirect(`/notes/${note._id}`)
        res.render(note)
      })
    } else {
      Note.find({}).then (note => {
        res.render(note)
      })
    }
  }
}