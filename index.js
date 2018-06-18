app.listen(3000, () => console.log('app is running'))

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

import mongoose from 'mongoose';

//GET '/' which should redirect to `/notes'
router.get('/notes', function(req, res){
	res.render('index');
});


//GET '/notes' which render view with a list of notes
router.get('/notes/show', function(req, res){
	res.render('notes');
});

//GET '/notes/:someParameter' where :someParameter can be used to identify or grab a single Note from the database.
router.get('/notes/', function(req, res){
	res.render('');
});


// DO NOT REMOVE THIS LINE:
module.exports = app
