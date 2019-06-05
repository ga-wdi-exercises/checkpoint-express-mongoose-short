const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        trim: true
    },
    email: String,
    notes: {

    }
})

/* 

User, with three fields

username
email
a ref called notes to Note. This should be an array of objects. 

*/

module.exports = mongoose.model('User', userSchema)