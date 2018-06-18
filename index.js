const express = require('express')
const hbs = require('hbs')
const notesController = require('./controllers/notes')

const app = express()

app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'))

app.use(require('./routes/notes'))
app.use(require('./routes/index'))


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
