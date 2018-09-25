const express = require('express')
const app = express()
const router = require('./routes.js')
const hbs = require('hbs')
//const bodyParser = require('body-parser')
//const methodOverride = require('method-override')
const Notes = require('./models/Note')

// middle wear view
app.set('view engine', 'hbs')

//atempt to initialize middlewear * not working
app.get('/', function (req, res) {
    res.send('work!')
})
//app.use(parser.urlencoded({ extended: true}))

// should have 3 routes
// get '/'
// get '/notes'
// get '/notes/:someParameter' where :someParamater can be used to identify or grab a single "Note" from the database

app.use(require(router))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
