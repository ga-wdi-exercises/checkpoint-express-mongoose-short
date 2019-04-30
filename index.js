const express = require('express')
const app = express()

const user = require('./routes/userRoutes.js')
const notes = require('./routes/notesRoutes.js')

app.use('/api/user', user)
app.use('api/notes', notes)









app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
