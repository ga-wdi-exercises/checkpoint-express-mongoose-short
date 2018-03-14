const express = require('express')
const hbs = require('hbs')

const app = express() 

const messagesController = require('./controllers/messages')

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/messages', messagesController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
