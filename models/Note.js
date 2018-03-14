const mongoose = require('../db/connections')

const NotesSchema = new mongoose.Schema({
  title: String,
  authour: String,
  body: String
})

const Notes = mongoose.model('Notes', NotesSchema)

module.exports = Notes
