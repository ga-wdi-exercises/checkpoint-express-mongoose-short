const mongoose = require('../db/connection');

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
