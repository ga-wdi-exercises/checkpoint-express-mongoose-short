const express = require('express')
const app = express()
const Notes = require('./models/Note')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const notesController = require('./controllers/messages')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  Notes.find({}).then(function (notes) {
    res.render('index', { notes })
  })
})

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.use('/notes', notesController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
