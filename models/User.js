const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Again not sure how to reference a schema in a different file
  // notes:[Note]
})

const User = mongoose.model('User',userSchema)

module.exports = User
