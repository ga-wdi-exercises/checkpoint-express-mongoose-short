const note = require('../models/note')
const seedData = require("/seeds.json")


note.remove({})
  .then(() => {
      return Note.collection.insert(seedData)
  }) 
   .then(() => {
       return Note.collection.insert(seedData)
   })
   .then (() => {
       process.exit()
   })



