const express = require('express')
const router = express.Router()

const Note = require("../models/Note")
const User = require("../models/User")

router.get("/", (req, res) => {
    Note.find().then(notes => {
        res.json(notes)
    })
})

router.get("/:objectId", (req, res) => {
    Note.findOne({objectId: req.params.objectId}).then(note => {
        res.json(note)
    })
})

module.exports = router