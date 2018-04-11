const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')

const notesController = require('./controllers/notes')
app.use('/', notesController)

app.listen(3000, () => console.log('app is running on port 3000'))

// DO NOT REMOVE THIS LINE:
module.exports = app
