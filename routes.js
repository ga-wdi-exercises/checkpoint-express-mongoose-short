const router = require('./routes.js')
const express = require('express')
const Note = require('./models/note.js')


router.GET('/', (req,res)=>{
    res.redirect('/notes')
})

router.GET('/notes', (req, res)=>{
    res.render('/views/show.hbs')
})

router.GET('/notes/findById', (req,res)=>{
res.render('/notes/findById')
})


module.exports = router