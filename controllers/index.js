const express = require('express')
const router = express.Router()
const Notes = require('../models/Note')

module.exports = {
    index: (req, res) => {
      Notes.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("Note")
        .then(notes => {
          res.render("index", { notes });
        });
    }
  };