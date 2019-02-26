const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Note = new mongoose.Schema({
  author: String,
  title: String,
  body: String
});

module.exports = mongoose.model("Note", Note);
