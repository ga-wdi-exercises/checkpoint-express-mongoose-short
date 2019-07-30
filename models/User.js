const mongoose = require('../db/connection')



const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [{  type: mongoose.Schema.ObjectId, ref: 'Note'}]
    
})

module.exports = mongoose.model('User', UserSchema)



