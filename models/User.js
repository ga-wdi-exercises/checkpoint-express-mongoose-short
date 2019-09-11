const mongoose = require('../db/connection')
const userSchema = mongoose.Schema

let userSchema = new mongoose.Schema({
    "username": String,
    "email": String,
    "notes": [{
        notes: [{
            ref: "Note",
            type: Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('User', userSchema)
