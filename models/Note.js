const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({})

module.exports = mongoose.model('Note', noteSchema)
