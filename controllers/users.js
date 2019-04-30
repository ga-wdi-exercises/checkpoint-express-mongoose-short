const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/users', (req, res) => {
    User.find({}).then(user => {
        res.json(user)
    })
})
router.get('/users/id', (req, res) => {
    User.find({ _id: req.params.id }).then(user => {
        res.json(user)
    })
})

module.exports = router
