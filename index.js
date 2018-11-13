const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const NotesCtrl = require("./controllers/notes.js")
const app = express()

app.use(parser.urlencoded({ extended : true}))
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use('/', NotesCtrl)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app