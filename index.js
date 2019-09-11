const express = require('express');
const app = express();

const notesController = require("./controllers/notes")
const usersController = require("./controllers/users")

const parser = require('body-parser');
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use('/', notesController)
app.use('/notes', notesController)
app.use('/users', usersController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
