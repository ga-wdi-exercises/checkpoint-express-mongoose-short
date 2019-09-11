const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    note: []
})

module.exports = mongoose.model('User', userSchema)
