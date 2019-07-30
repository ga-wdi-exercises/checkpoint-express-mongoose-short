const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({})

module.exports = mongoose.model('User', userSchema)

const UserSchema = new Schema ({
    username: String,
    email: String,
    notes: [NoteSchema]
})