const express = require('express')
const hbs = require('hbs')

const app = express()
const notesController = require('./controllers/notes')

app.set('view engine', 'hbs')

app.use('/', notesController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
