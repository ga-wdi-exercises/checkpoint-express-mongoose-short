const express = require("express")
const router = express.Router()

const Note = require('../models/Note')

router.get("/notes", (req, res) => {
    console.log('received a request on /')
    Note.find({}).then(notes => {
        console.log(notes)
        res.json(notes)
    })
   
})

router.get('/id/:id', (req, res) => {
    let noteId = req.params.id
    Note.findOne({ id: noteId }).then(doc => {
        res.json(doc)
    })
    // res.send("here is the title: " + title)
    // console.log(title)
})


module.exports = router