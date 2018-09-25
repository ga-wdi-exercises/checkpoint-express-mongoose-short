const mongoose = require("../db/connection");

const Note = new mongoose.Schema({});

var note = new Note({
  author: String,
  title: String,
  body: String
});

module.exports = mongoose.model("Note", Note);
