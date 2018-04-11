
const express = require('express')
const hbs = require('hbs')
const app = express()
const notes = require('./controllers/notes')
app.set('view engine', 'hbs')

app.listen(3000, () => console.log('app is running'))

app.use('/', notes)
// DO NOT REMOVE THIS LINE:
module.exports = app
