const mongoose = require('../db/connection')


const Note = new mongoose.Schema({
    author: '',
    title: '',
    body: '',
})

module.exports = mongoose.model('Note', Note)
