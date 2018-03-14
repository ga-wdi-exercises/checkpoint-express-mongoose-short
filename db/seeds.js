const Note = require('../models/Note')

const data = require('./seeds.json')

Note.remove({})
  .then(() => {
    console.log('passed')
    return Note.collection.insert(data)
  })
  .then(() => {
    process.exit()
  })
