const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({})

module.exports = mongoose.model('User', userSchema)
