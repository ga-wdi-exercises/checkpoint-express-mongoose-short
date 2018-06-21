const express = require('express')
const router = express.Router()
const Board = require('../models/Board')

router.get('/', (req, res) => {
  Board.find({})
    .then(messageboard => {
      console.log(messageboard)
      res.render('messageboard/ index', { messageboard })
    })
})

module.exports = router
