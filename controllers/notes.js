const express = require('express');
const router = express.Router();

const Note=require("../models/Note");
const User=require("../models/User"); 

router.get("/", (req, res) => {
    res.redirect('/notes');
})

router.get("/notes", (req,res)=>{
    Note.find({}).then(note=>res.json(note))
})

router.get("/notes/:id",(req,res)=>{
    Note.findById({id: req.params.id})
    .then(note=>res.json(note));
})