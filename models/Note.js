const mongoose = require("../db/connection");

const Note = new mongoose.Schema({
    Author: String,
    Title: String,
    Body: String
});


module.exports = mongoose.model("Note", Note);
