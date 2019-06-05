const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    notes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    }
    ]
})

module.exports = mongoose.model('User', userSchema)