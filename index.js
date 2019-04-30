const express = require('express')
const app = express()
const notesController = require('./controllers/notes')
const usersController = require('./controllers/users')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// redirects to api/people page when people entered in URL
app.use('/', (req,res) => {
	res.redirect('/api/notes/')
})

app.use('/api/notes/', notesController)
app.use('/api/users/', usersController)

app.listen(2000, () => console.log('They see me rollin...on port 2000...'))

// DO NOT REMOVE THIS LINE:
module.exports = app