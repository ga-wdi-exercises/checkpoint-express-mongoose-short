const mongoose = require('../db/connection')

const Note = new mongoose.Schema({})
const User = new Schema({
   
    author: String,
    title: String,
    
  });
  

module.exports = mongoose.model('Note', Note)
