const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

module.exports = {
    show: (req, res) => {
        Note.find({_id: req.params.id})
        .then(notes => {
            res.render('/index', { notes })
        })
    },
    someNotes: (req, res) => {
        Note.findOne({_id: req.params.id})
        .then(notes => {
            res.render('/show', { notes })
        })
    }

}