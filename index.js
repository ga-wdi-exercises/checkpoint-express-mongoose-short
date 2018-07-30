const express = require('express')
const hbs = require('hbs')
const notesController = require("./controllers/notes")
const Notes = require("./models/Note")
const app = express()
const router = express.Router()



app.set('views', __dirname + '/views');
app.set("view engine", "hbs")
app.use(express.static("public"));


// app.get("/", notesController.index)
app.get("/", (req, res) => {
  res.redirect('/notes')
})
app.get("/notes", notesController.index)
app.get("/notes/:id", notesController.show)

app.listen(3000, () => console.log('app is running'))
app.use(require("better-express-errors")(app))


// DO NOT REMOVE THIS LINE:
module.exports = app
