const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  // not sure how to reference a schema outside of the file
  // author:[User]
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
