const express = require('express')
const app = express()
const noteController = require('./controllers/index')

app.set("view engine", "hbs")

app.get('/', (req, res) => {
  res.redirect("/notes")
})

app.get('/notes', noteController.index)

app.get('/notes/:id', noteController.show)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app