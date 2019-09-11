const express = require('express')
const router = express.Router()

const Notes = require('../models/Note')


   router.get("/", (req, res) => {
      res.redirect("/notes");
    });
  
    router.get("/notes", (req,res) => {
    Notes.find({}).then(moreNotes =>{
        res.json(moreNotes)
    });
})

    router.get("/notes/:title", (req,res) => {
        Notes.findOne({
            title: req.params.title
        }).then(moreNotes =>{
            res.json(moreNotes);
        });
    });
    