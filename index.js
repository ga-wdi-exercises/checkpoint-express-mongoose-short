const express = require('express');
const app = express();
const router = require('./controllers/notes.js');
const parser = require('body-parser');
const methodOverride = require('method-override');
// const hbs = require("hbs")

app.use(router);
app.set('view engine', 'hbs');


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
