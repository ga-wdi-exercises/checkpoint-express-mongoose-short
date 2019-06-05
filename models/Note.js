const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    
})

module.exports = mongoose.model('Note', noteSchema)
