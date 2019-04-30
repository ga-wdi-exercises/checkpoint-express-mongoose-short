const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: [{
        ref:'User',
        type: mongoose.Schema.Types.ObjectId
    }]
})

let Note= mongoose.model('Note', noteSchema)

module.exports = Note



