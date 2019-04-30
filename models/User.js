const mongoose = require('../db/connection')


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [{
        ref: noteSchema,
        types: mongoose.Schema.Types.Array
    }]

})

module.exports = mongoose.model('User', userSchema)
