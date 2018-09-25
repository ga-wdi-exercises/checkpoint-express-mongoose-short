const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Note = new Schema({
    title: String,
    content: String,
})

module.exports = mongoose.model('Note', Note)
