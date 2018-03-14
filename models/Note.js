const mongoose = require("../db/connection");

const Note = new mongoose.Schema({
  noteTitle: String,
  body: String,
  author: String
});

module.exports = mongoose.model("Note", Note);
