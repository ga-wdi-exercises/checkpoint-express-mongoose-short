const mongoose = require('../db/connection')

const Note = new mongoose.Schema({})

module.exports = mongoose.model('Note', Note)
