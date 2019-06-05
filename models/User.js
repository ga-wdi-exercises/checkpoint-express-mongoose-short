const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model('User', userSchema)
