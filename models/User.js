const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    id: String
})

module.exports = mongoose.model('User', userSchema)
