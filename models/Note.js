const mongoose = require("../db/connection");

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  ref: { author }
});

module.exports = mongoose.model("Note", noteSchema);
