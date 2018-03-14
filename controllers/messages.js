const express = require("express")
const router = express.Router()
const Note = require("../models/Note")

router.post("/", (req, res) => {
    Note.create(req.body).then(note => {
        res.redirect(`/notes`)
    })
})