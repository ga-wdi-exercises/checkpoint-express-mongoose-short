const Notes = require('../models/Notes')
const data = require('./seeds.json')

Notes.remove()
    .then(() => {
      return Notes.collection.insert(data)
    })
    .then(() => {
      process.exit()
    })
