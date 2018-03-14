const Note = require('../models/Note')
const data = require('./seeds.json')

Note.remove({})
  .then(() => {
      return Note.collection.insert(data)
  })
  .then(() => {
      process.exit()
  })
