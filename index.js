const express = require('express')
const app = express()
//  initializing controller routes
const notesController = require('./controllers/notes')
const usersController = require('./controllers/users')
//  initialize body parse
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/notes', notesController)
app.use('/api/users/', usersController)
app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
