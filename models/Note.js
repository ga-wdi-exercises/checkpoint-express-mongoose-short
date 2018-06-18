const mongoose = require('../db/connection')

const Note = new mongoose.Schema({
  author: {
    type: String,
    index: true
  },
  title: {
    type: String
  },
  body: {
    type: String
  }
})
module.exports = mongoose.model('Note', Note)
