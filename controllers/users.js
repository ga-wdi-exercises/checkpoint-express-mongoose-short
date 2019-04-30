const express = require('express')
const router = express.Router()

const User = require('../models/User.js')


router.get('/', (req, res)=>{
    User.find({})
    .then(user =>{
       res.json(user) 
    })
})

router.get('/users/:someParameter', (req, res)=>{
    User.find({someParameter:req.params.someParameter})
    .then(user =>{
       res.json(user) 
    })
})