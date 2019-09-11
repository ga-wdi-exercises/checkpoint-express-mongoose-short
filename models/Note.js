const mongoose = require('../db/connection')
const noteSchema = mongoose.Schema

let noteSchema = new mongoose.Schema({
    "title": String,
    "body": String,
    "author": [{
        authors: [{
            ref: "User",
            type: Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('Note', noteSchema)
