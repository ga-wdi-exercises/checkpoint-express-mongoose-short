const Note = require('../models/Note')
seedData = require('./seeds.json')

Note.remove({})
  .then(() => {
    return Note.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
