const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    email: String,
    notes: {
        ref: "Note",
        type: mongoose.Schema.Types.ObjectId
    }
})

/* 

User, with three fields

username
email
a ref called notes to Note. This should be an array of objects. 

*/
let User = mongoose.model('User', userSchema)
module.exports = User
    // module.exports = mongoose.model('User', userSchema)