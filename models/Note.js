const mongoose = require('../db/connection')

const Note = new mongoose.Schema({})

module.exports = mongoose.model('Note', Note)

//3. There will be a single model, `Note`, with three fields: an `author`, a `title` and a `body`. Each field expects a string value.