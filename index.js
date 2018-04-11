const express = require('express')
const app = express()
const hbs = require('hbs')
const notesController = require('./controllers/notes')
const parser = require('body-parser')

app.set('view engine', 'hbs')

app.use(parser.urlencoded({ extended: true }))
app.use('/', notesController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
