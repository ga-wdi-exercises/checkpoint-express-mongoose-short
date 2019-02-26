var express = require('express');
var app = express();
const parser = require('body-parser')

app.use(parser.urlencoded({extended: true}))



app.listen(3001, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
