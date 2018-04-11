const seeds = require('./seeds.json')

const Note = require('../models/Note')

Note.remove({}).then(_ => {
  Note.collection.insert(seeds).then(_ => process.exit())
})
