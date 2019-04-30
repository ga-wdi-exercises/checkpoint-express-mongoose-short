const express = require('express')
const router = express.Router()
const noteSchema = require('../models/Note')

router.get('/', (req,res)=> {
    res.redirect('/notes')
})

router.get('/notes', (req,res)=> {
    noteSchema.find({}).then(allnotes => {
        console.log(allnotes)
        res.json(allnotes)
    })
})

router.get('/notes/:id', (req,res)=> {
    noteSchema.findOne({_id: req.params.id}).then(note => {
        res.json(note)
    })
})
module.exports = router