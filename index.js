const express = require('express')
const app = express()

const parser = require('body-parser')

const NotesController = require('./controllers/notes')
const UsersController = require('./controllers/users')

app.use(parser.urlencoded({extended: true})) 
app.use(parser.json()) 




app.get('/', (req, res) => {
    res.redirect('/notes')
    console.log("we good")
})

app.use('/notes/', NotesController)
app.use('/users/', UsersController)

      


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
