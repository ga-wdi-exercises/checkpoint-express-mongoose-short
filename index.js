const express = require('express')
const hbs = require('hbs')

const app = express()
app.set('view engine', 'hbs')

app.use('/', require('./routes/app'))
app.use('/note', require('./routes/note'))
app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
