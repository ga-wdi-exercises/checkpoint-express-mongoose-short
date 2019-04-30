const express = require('express')
const app = express
const Note = require('../checkpoint-express-mongoose-short/controllers/notes')
const User = require('../checkpoint-express-mongoose-short/controllers/users')


app.use('/api/note/', Note)
app.use('/api/user/', User)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
