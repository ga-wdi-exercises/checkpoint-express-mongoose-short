const express = require("express");
const router = express.Router();
const User = require('../models/User')

router.get("/", (req, res) => {
    User.find({}).then(user => {
        res.json(user)
    })

})

// router.post("/new", (req, res) => {
//     User.create(req.body).then(user => res.json(user))
// })

router.get("/:info", (req, res) => {
    let information = req.params.id
    User.findOne({ _id: information }).then(showInfo => {
        res.json(showInfo)
    })
})

module.exports = router;