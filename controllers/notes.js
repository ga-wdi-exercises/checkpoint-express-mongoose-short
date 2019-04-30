const express = require('express')
const router = express.Router()

const Note = require('../models/Note.js')

router.get('/', (req, res)=>{
    Note.find({})
    .then(note =>{
       res.json(note) 
    })
})

router.get('/notes/:someParameter', (req, res)=>{
    Note.find({someParameter:req.params.someParameter})
    .then(note =>{
       res.json(note) 
    })
})