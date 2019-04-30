

const mongoose = require('../db/connection')

const Schema = new mongoose.Schema({})

const Note = new Schema ({
    title = String,
    body = String,
    author = {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Note', Note)
