const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    author: {
        type: Object,
        ref: "User"
    }
})

module.exports = mongoose.model('User', userSchema)
