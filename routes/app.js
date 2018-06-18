const express = require('express')
const router = express.Router()
const note = require('../controllers/note.js')

router.get('/', function (req, res) {
  res.redirect('/notes')
})
