const express = require('express')
const app = express()
const router = require('./routes.js')
const hbs = require('hbs')
//const bodyParser = require('body-parser')
//const methodOverride = require('method-override')
const Notes = require('./models/Note.js')

// middle wear view
app.set('view engine', 'hbs')



app.use(router)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
