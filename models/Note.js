const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
  author: {
    firstName: String,
    lastName: String
  },
  title: String,
  body: String
})

module.exports = mongoose.model('Note', Note)
