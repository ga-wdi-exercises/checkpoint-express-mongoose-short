const mongoose = require('../models/User.js')
const Schema = mongoose.Schema

const User = new Schema ({
    username: String,
    email: String,
    notes : {
        type: Schema.Types.ObejctId,
        ref: "Note"
    }

})
module.exports = mongoose.model('User', Schema)
