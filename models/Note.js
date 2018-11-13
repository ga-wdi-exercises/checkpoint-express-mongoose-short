const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: { type: String },
  author: { type: String },
  body: { type: String }
});

module.exports = mongoose.model("Note", NoteSchema);
