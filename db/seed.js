const Note = require('../models/Note')
const seedData = require('./seeds.json')

Note.remove({})
  .then(() => {
    return Note.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
