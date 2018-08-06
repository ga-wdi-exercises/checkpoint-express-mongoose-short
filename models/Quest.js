const mongoose = require('../db/connection')

const Quest = new mongoose.Schema({
  title: String,
  quest_giver: String,
  rewards: Array,
  locations: Array
})

module.exports = mongoose.model('Quest', Quest)
