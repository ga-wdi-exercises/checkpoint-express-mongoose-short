const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    notes: 
    {
        type: [
            {}
        ],
        ref: "Notes"
    }
})

module.exports = mongoose.model('Note', noteSchema)
