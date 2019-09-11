const express = require('express')
const router = express.Router()

const Note = require("../models/Note")
const User = require("../models/User")

router.get("/", (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})

router.get("/:objectId", (req, res) => {
    User.findOne({objectId: req.params.objectId}).then(user => {
        res.json(user)
    })
})

module.exports = router