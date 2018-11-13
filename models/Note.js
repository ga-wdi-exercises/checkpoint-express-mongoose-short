const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports = mongoose.model('Note', Note);