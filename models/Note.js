const mongoose = require('../models/Note.js')
const Schema =  mongoose.Schema

const Note = new Schema ({
    title : String,
    body : String,
    author : {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Note', Schema)
