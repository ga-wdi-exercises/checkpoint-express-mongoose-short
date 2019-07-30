const mongoose = require('../db/connection')

const NoteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {type: mongoose.Schema.ObjectId, ref: 'Note'}
})






module.exports = mongoose.model('Note', NoteSchema)
