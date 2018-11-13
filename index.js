const express = require('express')
const notesController = require('./controllers/notesController')
const app = express()

app.set('view engine', 'hbs')
app.use(require('./controllers/notesController'))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
