const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Note = new mongoose.Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
})

module.exports = mongoose.model('Note', Note)
