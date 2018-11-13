const mongoose = require('mongoose')
const Note = require('../models/Note')
const seed = require('./seeds.json')
Note.find({}).remove(() => {
    console.log('Here is the database, yo...')
    Note.collection.insert(seed).then(theSeeds => {
        console.log(theSeeds)
        mongoose.connection.close()
    })
})