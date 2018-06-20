const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const router = require('./routes/index.js')

const app = express()
app.set('view engine', 'hbs')
app.use('/', router)

app.get('/', (request, response) => {
  response.send('Hello World')
})
app.listen(4000, () => {
  console.log('app listening on port 4000')
})

// DO NOT REMOVE THIS LINE:
module.exports = app
