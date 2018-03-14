const express = require('express')
const hbs = require('hbs')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Notes = require('./model/Notes')
const messagesController = require('./controllers/messages')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/messages', messagesController)

app.get('/', (req, res) => {
  Notes.find({})
        .then(notes => {
          res.render('index', {notes})
        })
        .catch(err => console.log(err))
})

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
