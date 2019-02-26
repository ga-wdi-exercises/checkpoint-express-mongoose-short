const express = require('express');
const router = express.Router();

app.set('view engine', 'hbs');
app.get('/', );
router.get('/', require('./note'));
router.get('/', show.hbs);
module.exports = router;

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  app.get('/note.js', function (req, res) {
    res.send('GET the notes!')
  })
  
  
  