const mongoose = require('../db/connection')

const Quest = new mongoose.Schema({
})

module.exports = mongoose.model('Quest', Quest)
