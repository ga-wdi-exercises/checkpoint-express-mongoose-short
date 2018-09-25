const express = require('express');
const app = express();
const router = require('./controllers/notes.js');

app.use(router);
app.set('view engine', 'hbs');


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
