const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String, 
    email: String, 
    notes: [{ 
        ref: "Notes", 
        type: mongoose.Schema.Types.ObjectId
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User;




