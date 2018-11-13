const mongoose = require('../db/connection')

NoteSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String
})


const Note = new mongoose.Schema({})

module.exports = mongoose.model('Note', Note)
