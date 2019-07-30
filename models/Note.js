const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const noteSchema = new mongoose.Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    body: String
})

module.exports = mongoose.model('Note', noteSchema)
