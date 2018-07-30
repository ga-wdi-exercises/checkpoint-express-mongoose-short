app.listen(3000, () => console.log('app is running'))
const express = require('express')
const app = express()
const router = require('./routes/Note.js')
app.use('/', router)
// DO NOT REMOVE THIS LINE:
module.exports = app
