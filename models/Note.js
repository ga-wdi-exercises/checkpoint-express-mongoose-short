const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = new mongoose.Schema({
    title: String,
    author: String,
    body: String
})

module.exports = mongoose.model('Note', Note)
