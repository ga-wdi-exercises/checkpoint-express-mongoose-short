const mongoose = require('../db/connection')

const Note = new mongoose.Schema( {
    author: String,
    title: String,
    body: String
})

mongoose.model('Note', Note)

module.exports = mongoose
