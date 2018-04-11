const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/notes_db')

mongoose.Promise = Promise

module.exports = mongoose
