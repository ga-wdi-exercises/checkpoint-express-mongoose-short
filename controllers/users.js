const express = require('express')
const router = express.Router()
const userSchema = require('../models/User')

router.get('/', (req,res)=> {
    userSchema.find({}).then(allusers => {
        console.log(allusers)
        res.json(allusers)
    })
})

router.get('/:id', (req,res)=> {
    userSchema.findOne({_id: req.params.id}).then(user => {
        res.json(user)
    })
})
module.exports = router