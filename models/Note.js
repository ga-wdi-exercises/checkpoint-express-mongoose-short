const mongoose = require("../db/connection");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
