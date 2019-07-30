const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: String,
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
})

module.exports = mongoose.model('Note', noteSchema)
