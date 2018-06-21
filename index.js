const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const noteController =require('./controllers/note')

const app = express();
app.set('view engine', 'hbs')







app.use('/', noteController)





app.listen(3000, () => console.log('app is running'))




// DO NOT REMOVE THIS LINE:
module.exports = app
