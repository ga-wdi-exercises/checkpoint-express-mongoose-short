const mongoose = require("../db/connection");

const Note = new mongoose.Schema({
   title: String,
   author: String,
   body: String
});

// const Note = mongoose.model("Note", NoteSchema)
module.exports = mongoose.model("Note", Note);
