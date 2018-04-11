const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String

})

const Note = mongoose.model('Note', noteSchema)
module.exports = Note
