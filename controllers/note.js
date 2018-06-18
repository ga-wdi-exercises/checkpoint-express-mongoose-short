const Note = require('../models/Note')
var express = require('express');
var router = express.Router();


router.get('/',(req, res)=>{
    res.redirect('/notes')
} )
router.get('/notes',(req, res)=>{
    Note.find({})
    .then(notes=>{
        res.render('index', {notes})
    })

})
router.get('/notes/:id', (req, res)=>{
    Note.findOne({_id: req.params._id})
    .then(note=>{
        res.render('show', {note})
    })

})
module.exports = router