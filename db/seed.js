const Quest = require('../models/Quest')
const seedData = require('./seeds.json')

Quest.remove({})
  .then(() => {
    return Quest.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
