const Note = require('../models/Note')
const seeds = require('./seeds.json')

Note.remove({})
  .then(() => {
    return Note.collection.insert(seeds)
  })
  .then(() => {
    process.exit()
  })
