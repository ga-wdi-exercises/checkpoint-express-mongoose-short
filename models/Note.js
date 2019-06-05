const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
})

/* 
A. Note, with three fields

title
body
a ref called author to User. A note will only be associated with a single user, so this should be a plain object.

 */
module.exports = mongoose.model('Note', noteSchema)