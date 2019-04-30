const mongoose = require('../db/connection')

const Schema = mongoose.Schema


const noteSchema = new Schema({
    title: String,
    body: String,
    author: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
})


module.exports = mongoose.model('Note', noteSchema)
