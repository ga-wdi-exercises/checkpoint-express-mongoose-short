const express = require ("express")
const app = express ()
const notes = require ("../routes/notes.js")
const users = require ("../routes/users.js")
const bodyParser = require('body-parser')

app.use (bodyParser.json())
app.use('notes', Note)
app.use('users', User)




app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
