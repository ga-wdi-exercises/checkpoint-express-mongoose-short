const express = require('express');
const hbs = require('hbs');

const app = express();

app.get('/',(req, res) => {
  res.render('/notes')
})
app.get('/notes', (req, res) => {
    Notes.find({})
    .then(Notes => {
        res.render('index', { Notes })
    })
})
app.get('/:author', (req, res) => {
    Notes.findOne({author: req.params.author})
    .then(Notes => {
        res.render('note/show', note)
    })
})
app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
