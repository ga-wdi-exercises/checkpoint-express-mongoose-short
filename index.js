const express = require("express");
const hbs = require("hbs");



const app = express()

app.get('/notes', function(req, res) {
	res.render('/')
})
app.get('/', function(req, res) {
	res.send('/')
})

app.get('/notes/:author', function(req, res) {
	res.send('/')
})
app.listen(3000, () => console.log('app is running'))



// DO NOT REMOVE THIS LINE:
module.exports = app
