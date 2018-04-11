const Notes = require('../models/Note.js')
const initialData = require('./seeds.json')

Notes.remove({}).then(_ => {
  initialData.forEach(note => {
    Notes.create(note)
  })
})
