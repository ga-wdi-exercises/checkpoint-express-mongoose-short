const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    notes: [{
        ref: 'Note',
        type: mongoose.Schema.Types.ObjectId
    }]
    
})

module.exports = mongoose.model('User', userSchema)
