const mongoose = require("../db/connection");

const NoteSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String
});

const Notes = (module.exports = mongoose.model("Note", NoteSchema));
