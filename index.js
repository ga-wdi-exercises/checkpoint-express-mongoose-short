const express = require('express');


// app.get('/', (res,req) => {
//     res.send('hello form')
// })
// app.get('/notes', (res,req) => {
//     res.send('hello form/notes')
// })
// app.get('/notes/:author', (res,req) => {
//     res.send('hello form /notes/:author')
// })
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  app.get('/notes', function (req, res) {
    res.send('GET request from notes')
  })
  app.get('/notes/:author', function (req, res) {
    res.send('GET request from notes author')
  })
// app.get('/notes', require('./models/Note'));
// app.get('/notes/:author', require('./models/Note'));

app.listen(3000, () => console.log('app is running'))
// router.all('*', (req, res) => {
//     res.status(3000).send();
//   });

// DO NOT REMOVE THIS LINE:
module.exports = app
