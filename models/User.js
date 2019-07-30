const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [
        {
          type: Schema.Types.ObjectId,
          ref: "Notes"
        }
      ]

})


module.exports = mongoose.model('User', userSchema)
