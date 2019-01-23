const express = require('express')
const router = express.Router()

//redirect to notes
app.get("/", (req, res) => {
    res.redirect("/notes")
})

//render view with a list of notes
app.get("/notes", (req, res) => {
    res.render("notes", { notes } )
})

//used to identify or grab a single note from the database
app.get("/notes/:someParameter", (req, res) => {
    res.render
})