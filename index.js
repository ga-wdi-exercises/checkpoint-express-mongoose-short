// DO NOT REMOVE THIS LINE:
const express = require('express')
const app = express()
module.exports = app


const noteController = require('./controllers/notes')
const userController = require('./controllers/users')
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', (req, res) => {
    res.redirect('/api/notes/')

app.use('/api/note/', noteController)
app.use('/api/user/', userController)

app.listen(8080, () => console.log('They see me rollin...on port 8080...'))