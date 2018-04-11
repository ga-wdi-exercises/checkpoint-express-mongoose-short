const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
