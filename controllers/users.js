const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/users', (req,res) => {
    User.find({}).then(users => res.json(users))
})

router.get('/users/:id',(req,res) => {
    User.findById(req.params.id).then( user => res.json(user) )
})

module.exports = router
