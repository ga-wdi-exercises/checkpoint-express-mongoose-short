const express = require ("express");
const notes = require ("../controllers/notes.js");
const router = express.Router
 
 module.exports = {
    index: (req, res) => {
        note.find({})
        .then(notes => {
            res.json(notes)
        })
    }
 };










