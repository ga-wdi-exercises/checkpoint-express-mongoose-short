const express = require('express')
const hbs = require('hbs')

const Note = require('./models/Note')
const messagesController = require('./controllers/messages')

const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  Note.find({}).then(message => {
    res.render('index', { message })
  })
})

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
