const express = require("express");
const app = express();
const parser = require('body-parser');

const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
