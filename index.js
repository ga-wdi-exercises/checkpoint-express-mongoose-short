const express = require('express')
const app = express()
const notesController = require('./controllers/notes')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.redirect('/notes')
})

app.use('/notes', notesController)

app.listen(3000, () => console.log('app is running here: http://localhost:3000!'))

// DO NOT REMOVE THIS LINE:
module.exports = app
