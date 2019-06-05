const express = require('express')
const parser = require('body-parser')
const app = express()


const noteController = require('./controllers/notes.js')
const userController = require('./controllers/users.js')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use('/notes/', noteController)
app.use('/users/', userController)
app.get('/', (req, res) => {
    res.redirect('/notes')
})

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app