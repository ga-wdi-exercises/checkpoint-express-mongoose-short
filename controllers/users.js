const express = require('express')
const router = express.Router()

const User = require('../models/User.js')

// GET '/users' which will return a list of all users
router.get('/users', (req, res) => {
    User.find({}).then(allusers => {
        res.json(allusers)
    })
})
// GET '/users/:someParameter which will return a single user by id
router.get('/user/:id', (req, res) => {
    User.findById({_id: req.params.id}).then(user => {
        res.json(user)
    })
})

module.exports = router