const mongoose = require("../db/connection");

const NoteSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String
});

module.exports = mongoose.model("Note", NoteSchema);
