const express = require('express')
const app = express()
const parser = require('body-parser')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))

app.use(require('./routes/index'))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
