const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    }
})

module.exports = mongoose.model('Note', noteSchema)
