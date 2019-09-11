const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: {
        type: Array,
        ref: "Note"
    }
})

module.exports = mongoose.model('User', userSchema)
