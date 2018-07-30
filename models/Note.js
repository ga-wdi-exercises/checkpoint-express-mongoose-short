const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Note = new mongoose.Schema({})

module.exports = mongoose.model('Note', Note)
