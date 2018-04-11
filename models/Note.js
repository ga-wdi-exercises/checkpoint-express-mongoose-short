const mongoose = require('../db/connection')

const NoteSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String
})

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note
