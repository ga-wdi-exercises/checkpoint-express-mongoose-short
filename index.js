const express = require('express');
const parser = require('body-parser');
const app = express();

const notesRoute = require('./routes/notes');
const usersRoute = require('./routes/users');

app.use(parser.json());


app.use('/notes', require('./routes/notes'));
app.use('/users', require('./routes/users'));

app.listen(3000, () => console.log('app is running'))



// DO NOT REMOVE THIS LINE:
module.exports = app
