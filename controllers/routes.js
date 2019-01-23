const express = require('express');
const app = express.Router();
const file = require("../models/Note");

app.get('/', function(req, res) {res.redirect('./notes')});
 
app.get('/notes', render('./notes'));

app.get('/notes/:someParameter', function(req, res) {
    res.render('/notes/:someParameter')
} );

module.exports = app



// GET '/' which should redirect to `/notes'
// GET '/notes' which render view with a list of notes
// GET '/notes/:someParameter' where :someParameter can be used to identify or grab a single Note from the database.