const express = require('express')
const app = express();

const noteController = require('./controllers/notes.js')
const userController = require('./controllers/users.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/notes/', noteController)
app.use('/api/users/', userController)

app.listen(3000, () => console.log('app is running'));

// DO NOT REMOVE THIS LINE:
module.exports = app
