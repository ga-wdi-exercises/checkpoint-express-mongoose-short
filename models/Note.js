const mongoose = require('../db/connection')

const NotesSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String
})

const Notes = mongoose.model('Notes', NotesSchema)

module.exports = Notes
