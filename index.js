const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.json())

app.use('/user', require('./routes/user'))
app.use('/note', require('./routes/note'))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
