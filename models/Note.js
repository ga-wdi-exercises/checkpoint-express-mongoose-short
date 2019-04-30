const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    Author: {
        ref: userSchema,
        type: mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('noteSchema', noteSchema)
