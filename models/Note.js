const mongoose = require("../db/connection");

const Note = new mongoose.Schema({
   title: String,
   author: String,
   body: String
});

module.exports = mongoose.model("Note", Note);
