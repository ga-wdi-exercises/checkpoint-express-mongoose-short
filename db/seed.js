const mongoose = require('../models/Note')
const seedData = require('./seeds.json')

const Note = mongoose.model('Note')

Note.remove({})
  .then( () => {
    seedData.forEach( (note) => {
        Note.collection.insert(note)
        console.log(note)
    })
  })
  .then( () => mongoose.disconnect())
