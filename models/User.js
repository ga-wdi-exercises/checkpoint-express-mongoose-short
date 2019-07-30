const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
